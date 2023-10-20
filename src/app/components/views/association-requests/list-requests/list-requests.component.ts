import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/components/models/AssociationDonation/request'; 
import { AssociationRequestService } from '../association-request.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

 
  constructor(private requestService: AssociationRequestService,
    private route:ActivatedRoute,private router:Router) { }

  idAssociation:number;
  
  //listRequest:Request= new Request();
  listRequest: any;
  
  
  ngOnInit(): void {  
    this.idAssociation = this.route.snapshot.params['idAssociation'];
    this.requestService.getListRequestByIdAssociation(this.idAssociation).subscribe(data => {
      this.listRequest = data;
    });
    
  }

  public onDeleteRequest(idRequest: number): void {
    this.requestService.deleteRequest(idRequest).subscribe(() => { this.getRequests() }

    ),
      (error: HttpErrorResponse) => {
        alert(error.message);
      };
  }
  
  private getRequests() {
    this.requestService.getListRequestByIdAssociation(this.idAssociation).subscribe(data => {
      this.listRequest = data;
      console.log(this.listRequest)

    });
  }



}
