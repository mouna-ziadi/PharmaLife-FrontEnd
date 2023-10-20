import { Component, OnInit } from '@angular/core';
import { GiftService } from './gift.service';
import { Router } from '@angular/router';
import { Gift } from '../../models/ProductAndGiftManagement/gift';
import { Product } from '../../models/ProductAndGiftManagement/product';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-gift-management',
  templateUrl: './gift-management.component.html',
  styleUrls: ['./gift-management.component.css']
})
export class GiftManagementComponent implements OnInit {

  constructor(router: Router,private gs:GiftService,private jwtService:JwtServiceService) { }


  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  mygifts!:Gift[];
  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
    this.myGifts();
  }

 
  public myGifts() {
    this.gs.myGifts(this.idUser).subscribe(data => {
      this.mygifts = data;
    });
  }
  public removeProductFromGift(p:Product):void{
    this.gs.removeProductFromGift(this.idUser,p).subscribe(
      (response:any) => {
        console.log(response);
        this.myGifts();
      
      },
      (error: HttpErrorResponse) => {
        alert("error removing product from gift"+error.message);
      }
    );
  }
  

}
