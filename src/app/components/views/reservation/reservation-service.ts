import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reservation } from '../../models/EventReservation/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife/reservations';
  
   
 
   constructor(private httpClient: HttpClient) { }
   token = localStorage.getItem('token');
   options = {
     headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
   };
  
  
 
   getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.API_URL + '/retrieveAllReservations',this.options);
   }

   createReservation(reservation: Reservation): Observable<any>{
     return this.httpClient.post(this.API_URL + '/addReservation', reservation,this.options);
   }

   getReservationById(idReservation: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.API_URL}/retrieveReservation/${idReservation}`,this.options);
  }

  updateReservation1(idReservation:number, reservation: Reservation):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/updateReservation/${idReservation}`, Reservation,this.options);
  }
  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(`${this.API_URL+"/updateReservation"}`, Reservation,this.options);
  }

  deleteReservation(idReservation: number): Observable<Object>{
    return this.httpClient.delete(`${this.API_URL}/deleteReservation/${idReservation}`,this.options);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    reservation.dateReservation = new Date();
    reservation.codeReservation = Math.floor(Math.random() * 1000) + 1;
    return this.httpClient.post<Reservation>(`${this.httpClient}/addReservation`, reservation,this.options);
  }


}
