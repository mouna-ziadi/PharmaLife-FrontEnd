import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from '../../models/AssociationDonation/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url : string = 'http://localhost:8082/PharmaLife/donations';
 
  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  ///crud donation

  getDonationList(): Observable<Donation[]>{
   return this.httpClient.get<Donation[]>(this.url + '/getDisabledDonations',this.options);  
  }

  getMyDonations(idUser: number): Observable<Donation[]>{
    return this.httpClient.get<Donation[]>(`${this.url}/getMyDonations/${idUser}`,this.options);  
  }
  
  createDonation(donation: Donation): Observable<any>{
    return this.httpClient.post(this.url + '/addDonation', donation,this.options);
  }

  getDonationById(idDonation: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/retrieveDonation/${idDonation}`,this.options);
  }


  public updateDonation(donation: Donation): Observable<Donation> {
    return this.httpClient.put<Donation>(`${this.url+"/updateDonation"}`, donation,this.options);
  }

  deleteDonation(idDonation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteDonation/${idDonation}`,this.options);
  }

  addDonationByMail(donation: Donation, idUser:number): Observable<any>{
    return this.httpClient.post(`${this.url}/addDonationByMail/${idUser}`, donation,this.options);
  }
 
}
