import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from './reservation-service';
import { Reservation } from '../../models/EventReservation/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  public editReservation?: Reservation;
  public deleteReservation?: Reservation;
  public detailsReservation?: Reservation;
  public yearsReservation?: Reservation;
  reservations: Reservation[];
  a: Reservation[];
  res:Reservation;



  
  idReservation: number;
  public requestReservation?: Request;
  public requestReservationA?: Reservation;
  requests: any;
  totalReservation: number;
  event: any;

  constructor(private http: HttpClient, private reservationService: ReservationService, private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.getReservations();

  }

  private getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      this.reservations = data;
      this.totalReservation = this.reservations.length;
    });
  }

  



  
  

  onFileSelected(fileReservation: any) {
    const file: File = fileReservation.target.files[0];
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





  /* public OnDetailsReservation(idReservation: number){
     this.reservationService.getReservationById(idReservation).subscribe(
       (response: Reservation) => {
         console.log(response);
       });
   }*/

 

  public onUpdateReservation(reservation: Reservation) {
    this.reservationService.updateReservation(reservation).subscribe(
      (response: Reservation) => {
        console.log(response);
        this.getReservations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }





  public onDeleteReservation(idReservation: number): void {



    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.deleteReservation(idReservation).subscribe(() => { this.getReservations(); }

      ),
      (error: HttpErrorResponse) => {
        alert(error.message);
      };
    }
  }

  public onOpenModal(reservation: Reservation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editReservation = reservation;
      button.setAttribute('data-target', '#updateReservationModal');
    }
    if (mode === 'delete') {
      this.deleteReservation = reservation;
      button.setAttribute('data-target', '#deleteReservationModal');
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addReservationModal');
    }
    if (mode === 'detail') {
      this.detailsReservation = reservation;
      button.setAttribute('data-target', '#detailReservationModal');
    }


    container?.appendChild(button);
    button.click();
  }





}
function book(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
  throw new Error('Function not implemented.');
}

