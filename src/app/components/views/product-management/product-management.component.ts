import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Category } from '../../models/ProductAndGiftManagement/category';
import { Product } from '../../models/ProductAndGiftManagement/product';
import { Reclamation } from '../../models/ProductAndGiftManagement/reclamation';
import { ReclamationService } from '../reclamation-management/reclamation.service';
import { GiftService } from '../gift-management/gift.service';
import { CategoryService } from '../category-management/category.service';
import { Gift } from '../../models/ProductAndGiftManagement/gift';
import { JwtServiceService } from '../../services/jwt-service.service';
//import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  allProducts!: Product[];
  top3Products!: Product[];
  allCategories!: Category[];
  searchText: any;
  detailsProduct?:Product;
  product!:Product;
  giftId:number=1;
  userId:number=1;
  reclamation!:Reclamation;
  showButton = true;
  selectedProducts: Product[] = [];
  mygifts:Gift[]
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;


  constructor( private jwtService:JwtServiceService,private ps: ProductService,private router: Router, private cs: CategoryService,
    private rs:ReclamationService,private gs:GiftService) { }

  ngOnInit(): void {
    console.log("produittssss"+this.getAllProducts());
    this.getAllProducts();
    this.getTop3Products();
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
    });
  }


  public getAllProducts() {
    this.ps.getAllProductsNotExpired().subscribe(data => {
      console.log(data);
      this.allProducts = data;
    });
  }

  public getTop3Products() {
    this.ps.getTop3Prodcuts().subscribe(data => {
      this.top3Products = data;
    });
  }
  public  deleteProduct(productId: number) {
    this.ps.deleteProduct(productId).subscribe(() => {
      this.getAllProducts();
      alert("Product has been deleted")
    });
  }

  public myGifts() {
    this.gs.myGifts(this.userId).subscribe(data => {
      console.log(data);
      this.mygifts = data;
    });
  }

  public addReclamation(){
    this.rs.addReclamation(this.reclamation).subscribe(()=>{
      this.reclamation.idProduct=this.reclamation.product.idProduct;
      this.reclamation.idUser=1;
      console.log("reclamation")
      alert("Reclamation sent successfully")
      this.router.navigate(['/product-management']);
      this.getAllProducts();
    });
  }
  addGift(p:any){
    this.gs.getDuplicatedProduct(1,p.idProduct).subscribe(
      (exists:boolean)=>{
        if(exists){
          alert("Product is already added in gift");
          this.router.navigate(['/gift-management']);
        }
        else{

         
            this.gs.addGift(1,p).subscribe((gift:Gift) => {
              gift.userGift.idUser=this.decodedToken.idUser;
              alert("Product added successfully to your gift")
              this.router.navigate(['/gift-management']);
            });
        }
      })
  }

  
  

  public onAddProduct(addForm: NgForm):void{
    this.ps.addProduct(addForm.value).subscribe(
      (response:any) => {
        console.log(response);
        this.getAllProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert("error adding"+error.message);
      }
    );
  }



  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode == 'details') {
      this.detailsProduct = product;
      button.setAttribute('data-target', '#productDetailsModal');
      console.log("details")
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addProductModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getDateDiffInDays(dateString1: string): any {
    const date1 = Date.parse(dateString1);
    if (isNaN(date1)) {
        return "Invalid date";
    }
    const date2 = new Date();
    const diffMs = Math.abs(date2.getTime() - date1);
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
}


  
///fakher
AddCommand(idProduct: number){
  this.router.navigate(['addCommand', idProduct]);
}


}
