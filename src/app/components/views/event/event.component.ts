import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from './event-service';
import { RequestService } from '../request/request.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation/reservation-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Reservation } from '../../models/EventReservation/reservation';
import { User } from '../../models/user/user';
import { Evenement } from '../../models/EventReservation/event';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  addForm: FormGroup;
  public editEvent?: Evenement;
  public deleteEvent?: Evenement;
  public detailsEvent?: Evenement;
  public yearsEvent?: Evenement;
  events: Evenement[];
  a: Evenement[];
  oldevents: Evenement[];
  idEvent:number;
  public requestEvent?: Request;
  public requestEventA?: Evenement;
  requests: any;
  totalEvent: number;
  res:Reservation;
  reservations: Reservation[];


  r:Reservation={
    dateReservation: new Date(),
    userReservation: new User(),
    event: [],
    idEvent: 0,
    idUser: 0
  }
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  constructor(private http: HttpClient,private reservationService:ReservationService ,private eventService:EventService
    ,private router: Router,private jwtService:JwtServiceService) { }



  ngOnInit(): void {
    this.getEvents(); 
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }
  }

  private getEvents(){
    this.eventService.getEventList().subscribe(data => {
       this.events = data;
       this.totalEvent = this.events.length;
    });
  }



  onFileSelected(fileEvent: any) {
    const file: File = fileEvent.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file, file.name);
      this.http.post('/api/upload', formData).subscribe(
        (response) => {
          console.log('File uploaded successfully');
          // Handle the response from the server as needed
        },
        (error) => {
          console.error('Error uploading file', error);
          // Handle the error as needed
        }
      );
    }
  }

  private getReservations(){
    this.reservationService.getReservationList().subscribe(data => {
       this.reservations = data;
    });
  }
  
  public onAddReservation(id:number) {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
   }
        this.r.idUser=this.idUser;
        this.r.idEvent=id;
        let confirmAction = confirm("Are you sure to execute this action?");
        if (confirmAction) {
         
          this.reservationService.createReservation(this.r).subscribe(
            (response: Reservation) => {
              console.error;
              console.log(response);
              alert("Action successfully executed");
              this.getReservations();
             
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        } else {
          alert("Action canceled");
        }
      }
   
  
  

 /* public OnDetailsEvent(idEvent: number){
    this.eventService.getEventById(idEvent).subscribe(
      (response: Event) => {
        console.log(response);
      });
  }*/

  public onAddEvent(addForm: NgForm): void {
    document.getElementById('add-Event-form')!.click();
    this.eventService.createEvent(addForm.value).subscribe(
      (response: Event) => {
        console.error
        console.log(response);
        this.getEvents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
 /* public onUpdateEvent(event: Event) {
    this.eventService.updateEvent(event).subscribe(
      (response: Event) => {
        console.log(response);
        this.getEvents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
  
 
  

  
  public onDeleteEvent(idEvent: number): void {
    
    
    
    if (confirm('Are you sure you want to delete this event?')) { this.eventService.deleteEvent(idEvent).subscribe(() => { this.getEvents(); }
    
    ),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }; }
  }
  
  public onOpenModal(event: Evenement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editEvent = event;
      button.setAttribute('data-target', '#updateEventModal');
    }
    if (mode === 'delete') {
      this.deleteEvent = event;
      button.setAttribute('data-target', '#deleteEventModal');
    }
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addEventModal');
    }
    if (mode === 'detail') {
      this.detailsEvent = event;
      button.setAttribute('data-target', '#detailEventModal');
    }
  
  
    container?.appendChild(button);
    button.click();
  }
  




}
