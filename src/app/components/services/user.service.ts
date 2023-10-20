import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl= environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };



    registerUser(user: User): Observable<Object> {
      console.log(user);
      return this.http.post<string>(`${this.apiServerUrl}/registration`,user);
   }

getUserById(idUser: number): Observable<User>{
    console.log(this.options);
    return this.http.get<User>(`${this.apiServerUrl+"/User/retrieve-User"}/${idUser}`, this.options );
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl+"/User/update-User"}`,user,{
      headers: new HttpHeaders({
        'authorization' : `Bearer ${this.token}`,
        'Content-Type' : 'application/json'
      })
    });
  }

  
}
