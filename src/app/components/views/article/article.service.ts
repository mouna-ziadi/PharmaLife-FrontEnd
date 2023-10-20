import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/ArticleComment/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife/Article';
  
 constructor(private httpClient: HttpClient) { }
 token = localStorage.getItem('token');
 options = {
   headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
 };

 /* getArticles() {
   return this.httpClient.get(`${this.API_URL}/all-articles`);
 } */

 getArticleList(): Observable<Article[]>{
   return this.httpClient.get<Article[]>(`${this.API_URL}`+"/all-articles",this.options);
 }

/*  getArticleById(idArticle: number) {
   return this.httpClient.get(`${this.API_URL}`+"/articles/${idArticle}");
 } */

 createArticle(article: Article) : Observable<any>{
   return this.httpClient.post(`${this.API_URL}`+"/add-article", article,this.options);
 }

 getArticleById(idArticle: number): Observable<Article>{
   return this.httpClient.get<Article>(`${this.API_URL}/retrieveArticle/${idArticle}`,this.options);
 }

 
 /* updateArticle(article: Article) : Observable<Article>{
   return this.httpClient.put(`${this.API_URL}`+"/edit-article/${article.idArticle}", article);
 } */

 updateArticle1(idArticle:number, article: Article):Observable<Object>{
   return this.httpClient.put(`${this.API_URL}/edit-article/${idArticle}`, article,this.options);
 } 

 public updateArticle(article: Article): Observable<Article> {
   return this.httpClient.put<Article>(`${this.API_URL+"/edit-article"}`, article,this.options);
 }
 

deleteArticle(idArticle: any): Observable<Object> {
   return this.httpClient.delete(`${this.API_URL}/delete-article/${idArticle}`,this.options);
 }

 
/* statisticsDonationStatus(): Observable<Map<String,number>>{
   return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsDonationStatus/");
 }*/


//  getOldAssociationList(): Observable<Association[]>{
 //   return this.httpClient.get<Association[]>(this.url + '/retrieveAssociationsPlusTroixAns');
 // }



}
