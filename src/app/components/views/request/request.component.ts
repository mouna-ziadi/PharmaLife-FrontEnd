import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { Request } from '../../models/AssociationDonation/request'; 


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

 
  requests: Request[];
 

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
 
  }


  private getRequests(){
    this.requestService.getRequestList().subscribe(data => {
      this.requests = data;
  
    });
  }
  
 

 

}
