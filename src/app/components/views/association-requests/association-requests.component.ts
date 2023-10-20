import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from '../../models/AssociationDonation/association';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociationService } from '../association/association.service';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-association-requests',
  templateUrl: './association-requests.component.html',
  styleUrls: ['./association-requests.component.css']
})
export class AssociationRequestsComponent implements OnInit {

  idAssociation: number;
 // idUser: number = 1;
  associations: Association[]; 
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;


  constructor(private associationService: AssociationService,private router:Router,private jwtService:JwtServiceService ) { } 

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
    this.getAssociations(); 
  }

  private getAssociations(){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
   }
    this.associationService.getMyAssociationsList(this.idUser).subscribe(data => {
      this.associations = data;
    });
  }

  deleteAssociation(idAssociation: number){
    this.associationService.deleteAssociation(idAssociation).subscribe(data =>{
      console.log(data);
      this.getAssociations();
    })
  }
  
  listRequests(idAssociation: number){
    this.router.navigate(['listRequests', idAssociation]);
  }


}
