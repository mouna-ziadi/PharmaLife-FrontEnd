import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ReclamationService } from '../reclamation.service';
import { ProductService } from '../../product-management/product.service';
import { Reclamation } from 'src/app/components/models/ProductAndGiftManagement/reclamation';
import { Product } from 'src/app/components/models/ProductAndGiftManagement/product';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';
import { User } from 'src/app/components/models/user/user';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamationForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private ps: ProductService, private rs: ReclamationService,
    private formBuilder: FormBuilder,private jwtService:JwtServiceService ) {
    this.reclamationForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.pattern(/^[^_!?:;*+-/]*$/)]]

      
    });
  }
   

  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  r: Reclamation = {
    idReclamation: 0,
    descriptionReclamation: '',
    dateReclamation: "",
    archived: 0,
    idUser: 0,
    idProduct: 0,
    userProduct: new User(),
    product: new Product()
  }
  oneProduct: Product;
  myReclamations: Reclamation[];

  ngOnInit(): void {
    this.getProductById();

    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }


  getProductById() {
    this.r.idProduct = this.route.snapshot.params['id'];
    console.log(this.r.idProduct)
    this.ps.OnDetailsProduct(this.r.idProduct).subscribe(data => {
      this.oneProduct = data;
      console.log(data);
    });
  }
  public getMyReclamations(idUser: number) {
    this.rs.getMyReclamations(this.idUser).subscribe(data => {
      this.myReclamations = data;
    });
  }



  AddReclamation() {
    this.r.idProduct = this.oneProduct.idProduct;
    this.r.idUser = this.idUser;
    this.rs.duplicatedReclamation(this.r.idUser, this.r.idProduct).subscribe((reclamations: Reclamation[]) => {
      if (reclamations.length > 0) {
        alert("A reclamation for this product has already been submitted.");
      } else {
        this.rs.addReclamation(this.r).subscribe(() => {
          alert("Reclamation sent successfully, check your email")
          this.router.navigate(['/reclamation-management']);
        });
      }
    });
}

  
}
