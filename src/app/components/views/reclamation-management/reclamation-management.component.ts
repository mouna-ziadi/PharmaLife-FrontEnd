import { Component, OnInit } from '@angular/core';
import { ReclamationService } from './reclamation.service';
import { Router } from '@angular/router';
import { Reclamation } from '../../models/ProductAndGiftManagement/reclamation';
import { JwtServiceService } from '../../services/jwt-service.service';


@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.css']
})
export class ReclamationManagementComponent implements OnInit {

  constructor(router: Router,private rs:ReclamationService,private jwtService:JwtServiceService) { }

  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;

  myReclamations!:Reclamation[];
  //idUser:number=1;

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
    this.getMyReclamations(this.idUser);
  }

  public getMyReclamations(idUser:number) {
    this.rs.getMyReclamations(1).subscribe(data => {
      this.myReclamations = data;
    });
  }

}
