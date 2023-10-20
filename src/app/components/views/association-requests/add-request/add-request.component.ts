import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/components/models/AssociationDonation/request';
import { AssociationRequestService } from '../association-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Association } from 'src/app/components/models/AssociationDonation/association'; 
import { AssociationService } from '../../association/association.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  associationList: Association[];
  request: Request = new Request();
  idAssociation: number;
  myRequest: Request = new Request();

  constructor(private associationRequestService: AssociationRequestService,private associationService: AssociationService,
    private route:ActivatedRoute,private router:Router) { } 

  ngOnInit(): void {
    this.idAssociation = this.route.snapshot.params['idAssociation']; 
    this.getAssociations(); 
  }

  saveAssociationRequest(){
    this.associationRequestService.createRequest(this.request).subscribe(data =>{
      console.log(data);
     // this.goToAssociationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToMyRequestList(){
    this.router.navigate(['/myRequest']);
  }

  onSubmit(f: NgForm){
    this.associationRequestService.assignRequestToDonationInf3(this.myRequest, this.idAssociation).subscribe(
      (response: Request) => {
        console.log(response);
        alert("Your Request is Added Successfully !");
        this.goToMyRequestList(); 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => {
      this.associationList = data;
    });
  }

   ////Fonctionnalité avancé
   public assignRequestToDonationInf3( request: Request,idAssociation: number) {
    this.associationRequestService.assignRequestToDonationInf3(this.myRequest, this.idAssociation).subscribe(
      (response: Request) => {
        console.log(response);
        //this.getAssociations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
