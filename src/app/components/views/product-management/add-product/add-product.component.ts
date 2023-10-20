import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Category } from '../../../models/ProductAndGiftManagement/category';
import { Product } from '../../../models/ProductAndGiftManagement/product';

import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../category-management/category.service';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';
import { User } from 'src/app/components/models/user/user';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  selectedCategory: any = {};
  p: Product = {
    idProduct: 0,
    referenceProduct: '',
    nameProduct: '',
    imageProduct: '',
    descriptionProduct: '',
    priceProduct: '',
    quantityProduct: '',
    expired: 0,
    expirationDateProduct: new Date(),
    userProduct: new User(),
    ReclamationsProduct: [],
    creationDate: new Date(),
    categoryProduct: { idCategory: 0, nameCategory: '', descriptionCategory: '', archived: true },
    idCategory: 0,
    idUser:0
  }

  allCategories: Category[];
  prod: Product;
  categ: Category;
  name: any;
  

  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;

  constructor(private jwtService:JwtServiceService,private fb: FormBuilder, private cs: CategoryService, private router: Router, private ps: ProductService, private route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
    this.productForm = this.fb.group({
      Pp: ['', [Validators.required, Validators.min(15)]],
      Pq: ['', [Validators.required, Validators.min(15)]],
      nameC: ['', Validators.required]
    });
  }
  ngOnInit(): void {

    this.getCategories();
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }



  }
  public getCategories() {
    this.cs.getAllCategoriesNotArchived().subscribe(data => {
      this.allCategories = data;
      console.log(data);
    });
  }
  public getCategoryByName() {
    this.cs.getCategoryByName(this.name).subscribe((data: Category) => {
      this.categ = data;
      console.log("Category object: ", this.categ);
    });
  }

  onSelected(value: string): void {
    console.log("Selected category name: ", value);
    this.name = value;
    console.log("nameee" + this.name)
  }

  addProduct(p: Product) {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);
   }
    this.ps.checkProductExists(this.name).subscribe(
      (exists: boolean) => {
        if (exists) {
          alert("Product already exists with the same name ")
        } else {
          this.cs.getCategoryByName(this.name).subscribe((data: Category) => {
            this.categ = data;
            console.log("Category object: ", this.categ);
            p.idCategory = this.categ.idCategory;
            p.userProduct.idUser=this.idUser;
            p.idUser=this.decodedToken.idUser;
            console.log("lena l9aha " + p.categoryProduct.idCategory)
            this.ps.addProduct(p).subscribe(() => {
              alert("Product added successfully")
              this.router.navigate(['/product-management']);
            });
          });
        }
      },

    );
  }





  /*expDate(Date: Date): Boolean {
   //const date1 = new Date(date1);
   const date2 = new Date();
   const diffMs = Math.abs(date2.getTime() - date1.getTime());
   const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
   return date2>date1;
 }*/

 public getDate(dateString1: Date): any {
  const date1 = new Date(dateString1);
  const date2 = new Date();
  const diffMs = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (date2 < date1)  {
    return true;
  }
  else {
    return false;
  }
}

  /*onSubmit() {
    this.addProduct();
  }*/

}

