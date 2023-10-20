import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/ProductAndGiftManagement/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = "http://localhost:8082/PharmaLife/Category";

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  getAllCategoriesNotArchived(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}` + "/all-categoriesNotArchived",this.options);
  }

  getCategoryByName(name: string): any  {
    return this.httpClient.get<any>(`${this.baseURL}` + "/getByName/"+name,this.options);
  }
}
