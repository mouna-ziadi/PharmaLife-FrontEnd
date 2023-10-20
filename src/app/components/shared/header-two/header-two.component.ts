import { Component } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
  export class HeaderTwoComponent extends HelperService {
    token = localStorage.getItem('token');
     decodedToken : any;
     username: any;
    constructor(private router:Router,private jwtService:JwtServiceService ){
        super();


        if (this.token) {
         this.decodedToken= this.jwtService.DecodeToken(this.token);

         this.username =this.decodedToken.lastName+ " "+ this.decodedToken.firstName;

         console.log(this.decodedToken);
      }

     
    }
   //router: Router;
  
   onLogout() {
    localStorage.removeItem('token');
  
    this.router.navigate(['/login']);
  }
  }