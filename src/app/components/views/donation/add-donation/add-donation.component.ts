import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'src/app/components/models/AssociationDonation/donation';
import { DonationService } from '../donation.service';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {

  donation: Donation = new Donation();
  //idUser : number = 1;

  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;

  constructor(private donationService: DonationService,private router:Router, private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }

  saveDonation(){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
   }
    this.donationService.addDonationByMail(this.donation,this.idUser ).subscribe(data =>{
      console.log(data);
      this.goToDonationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToDonationsList(){
    this.router.navigate(['/myDonations']);
  }

  onSubmit(){
    console.log(this.donation);
    this.saveDonation();
    alert("Your is donation Added Successfully !");
    this.goToDonationsList();
  }


}
