import { Component, OnInit } from '@angular/core';
import { Association } from 'src/app/components/models/AssociationDonation/association';
import { AssociationService } from '../association.service';
import { Router } from '@angular/router';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';

@Component({
  selector: 'app-my-association',
  templateUrl: './my-association.component.html',
  styleUrls: ['./my-association.component.css']
})
export class MyAssociationComponent implements OnInit {
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  associations: Association[]; 
  id:1;
  constructor(private associationService: AssociationService,private router:Router, private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    this.getAssociations(); 
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      this.id=this.idUser;
      console.log(this.idUser);
   }
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

  TakeDonation(idAssociation: number){
    this.router.navigate(['donation', idAssociation]);
  }
  AddRequest(idAssociation: number){
    this.router.navigate(['addRequest', idAssociation]);
  }


}
