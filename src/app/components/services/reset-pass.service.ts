import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  resetpassword(token:string, email:string, password:string):Observable<Object>{
      return this.http.get<string>(this.apiServerUrl+"/registration/resetPassword/"+token+"/"+email+"/"+password);
   }
   }