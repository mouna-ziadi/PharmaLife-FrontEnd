import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../../models/AssociationDonation/request';

@Injectable({
  providedIn: 'root'
})
export class AssociationRequestService {

  url : string = 'http://localhost:8082/PharmaLife/requests'; 

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  getRequestList(): Observable<Request[]>{
   return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequests',this.options);
   
  }

  createRequest(request: Request): Observable<any>{
    return this.httpClient.post(this.url + '/addRequest', request,this.options);
  }

  
  getListRequestByIdAssociation(idAssociation: number): Observable<Request>{
    return this.httpClient.get<Request>(`${this.url}/getMyRequests/${idAssociation}`,this.options);
  }

  //take donation button
  assignRequestToDonation(request: Request, idDonation: number, idAssociation: number): Observable<Request> {
    return this.httpClient.post<Request>(`${this.url}/assignRequestToDonation/${idDonation}/${idAssociation}`, request,this.options);
    //console.log(this.httpClient.post<Request>(`${this.url}/assignRequestToDonation/${idDonation}/${idAssociation}`, request));
  }

  //add request button
  assignRequestToDonationInf3(request: Request, idAssociation: number): Observable<Request> {
    return this.httpClient.post<Request>(`${this.url}/assignRequestToDonationInf3/${idAssociation}`, request,this.options);
  }

  deleteRequest(idRequest: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/cancelRequest/${idRequest}`,this.options);
  }
}
