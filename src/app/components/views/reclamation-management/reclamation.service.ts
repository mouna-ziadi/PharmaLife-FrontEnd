import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../../models/ProductAndGiftManagement/reclamation';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {


  private baseURL = "http://localhost:8082/PharmaLife/Reclamation";
  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  addReclamation(reclamation: Reclamation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/add-reclamation", reclamation,this.options);
  }
  getMyReclamations(idUser:number): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}` + "/my-reclamations/"+`${idUser}`,this.options);
  }

  duplicatedReclamation(idUser:number,idProduct:number): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}` + "/getrec/"+`${idUser}`+"/"+`${idProduct}`,this.options);
  }
}
