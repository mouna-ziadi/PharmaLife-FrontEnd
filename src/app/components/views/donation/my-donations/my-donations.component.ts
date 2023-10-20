import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/components/models/AssociationDonation/donation';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.component.html',
  styleUrls: ['./my-donations.component.css']
})
export class MyDonationsComponent implements OnInit {

  donations: Donation[]; 
  //idUser : number =1;
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;

  constructor(private donationService: DonationService,private router:Router,private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    this.getDonations(this.idUser); 

    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }

  private getDonations(idUser: number){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
   }
    this.donationService.getMyDonations(this.idUser).subscribe(data => {
      this.donations = data;
    });
  }

  deleteDonation(idDonation: number){
    this.donationService.deleteDonation(idDonation).subscribe(data =>{
      console.log(data);
      this.getDonations(this.idUser);
    })
  }


}
