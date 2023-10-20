import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../../models/EventReservation/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife/events';
  
   
 
   constructor(private httpClient: HttpClient) { }
   token = localStorage.getItem('token');
   options = {
     headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
   };
  
 
   getEventList(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/retrieveAllEvents',this.options);
   }

   createEvent(event: Evenement): Observable<any>{
     return this.httpClient.post(this.API_URL + '/addEvent', event,this.options);
   }

   getEventById(idEvent: number): Observable<Evenement>{
    return this.httpClient.get<Evenement>(`${this.API_URL}/retrieveEvent/${idEvent}`,this.options);
  }

  updateEvent1(idEvent:number, event: Evenement):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/updateEvent/${idEvent}`, event,this.options);
  }
  public updateEvent(event: Evenement): Observable<Evenement> {
    return this.httpClient.put<Evenement>(`${this.API_URL+"/updateEvent"}`, event,this.options);
  }

  deleteEvent(idEvent: number): Observable<Object>{
    return this.httpClient.delete(`${this.API_URL}/deleteEvent/${idEvent}`,this.options);
  }



}
