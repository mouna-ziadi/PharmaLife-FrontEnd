import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  forgetpassword(email:string):Observable<Object>{
      console.log(email);
    return this.http.get<string>(`${this.apiServerUrl}/registration/forgetPassword/${email}`);
}
}
