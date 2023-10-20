  import { HttpClient,HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Commentaire } from '../../models/ArticleComment/comment';
  
  @Injectable({
    providedIn: 'root'
  })
  export class CommentService {
  
  
    private baseURL = "http://localhost:8082/PharmaLife/Comment";
    constructor(private httpClient: HttpClient) { }
    token = localStorage.getItem('token');
    options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    };
  
    addComment(comment: Commentaire): Observable<Object> {
      return this.httpClient.post(`${this.baseURL}`+ "/add-comment", comment, this.options);
    }
    getMyComment(idUser:number): Observable<Commentaire[]> {
      return this.httpClient.get<Commentaire[]>(`${this.baseURL}`+ "/my-comment/"+`${idUser}`, this.options);
    }
  
    duplicatedComment(idUser:number,idProduct:number): Observable<Commentaire[]> {
      return this.httpClient.get<Commentaire[]>(`${this.baseURL}` + "/getcomment/"+`${idUser}`+"/"+`${idProduct}`, this.options);
    }
  }
  

