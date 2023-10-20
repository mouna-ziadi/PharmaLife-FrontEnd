import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../../models/AssociationDonation/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  url : string = 'http://localhost:8082/PharmaLife';

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  getRequestList(): Observable<Request[]>{
   return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequests',this.options);
   
  }

 
  
}
