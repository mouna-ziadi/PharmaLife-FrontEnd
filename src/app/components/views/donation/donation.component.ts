import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/AssociationDonation/donation'; 
import { DonationService } from './donation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AssociationRequestService } from '../association-requests/association-request.service';
import { Request } from '../../models/AssociationDonation/request';
import { AssociationService } from '../association/association.service';
import { Association } from '../../models/AssociationDonation/association';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  //idUser: number = 1;
  associations: Association[];
  myRequest: Request = new Request();
  
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  idAssociation: number;
  donations: Donation[]; 

  constructor(private donationService: DonationService, private associationRequestService : AssociationRequestService,
    private associationService: AssociationService,private route:ActivatedRoute,private router:Router,
    private jwtService:JwtServiceService) { }

  ngOnInit(): void {
    this.idAssociation = this.route.snapshot.params['idAssociation']; 
    this.getDonations(); 
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }  

  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
      this.donations = data;
    });
  }
  public onAddDonation(addForm: NgForm): void {
    document.getElementById('add-Donation-form')!.click();
    this.donationService.createDonation(addForm.value).subscribe(
      (response: Donation) => {
        console.error
        console.log(response);
        this.getDonations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  ////Fonctionnalité avancé
  public assignRequestToDonation( request: Request,idDonation: number, idAssociation: number) {
    this.associationRequestService.assignRequestToDonation(this.myRequest, idDonation, this.idAssociation).subscribe(
      (response: Request) => {
        console.log(response);
       this.goToAssociationsList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goToAssociationsList(){
    this.router.navigate(['/myAssociation']);
  }



 







}
