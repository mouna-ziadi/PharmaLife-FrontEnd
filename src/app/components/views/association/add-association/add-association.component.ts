import { Component, OnInit } from '@angular/core';
import { Association } from 'src/app/components/models/AssociationDonation/association'; 
import { AssociationService } from '../association.service';
import { Router } from '@angular/router';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

  association: Association = new Association();
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  constructor(private associationService: AssociationService, private router:Router, private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }

  saveAssociation(){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
   }
    this.associationService.createAssociationbyMail(this.association,this.idUser ).subscribe(data =>{
      console.log(data);
     // this.goToAssociationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToAssociationsList(){
    this.router.navigate(['/myAssociation']);
  }

  onSubmit(){
    console.log(this.association);
    this.saveAssociation();
    alert("Your is Association Added Successfully !");
    this.goToAssociationsList();

  }


}
