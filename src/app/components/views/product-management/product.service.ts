import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../../models/ProductAndGiftManagement/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  getAllProductsNotExpired(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-productsFront",this.options);
  }

  getTop3Prodcuts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/top3Products",this.options);
  }
  OnDetailsProduct(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}` + "/retrieve-product/"+`${idProduct}`,this.options);
  }

  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/add-product", product,this.options);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + "/update-product", product,this.options);
  }

  deleteProduct(id: number): Observable<Object> {
    
    return this.httpClient.delete("http://localhost:8082/PharmaLife/Product/delete-product/"+id,this.options);
  }
  checkProductExists(name: string): Observable<boolean> {
    const url = `${this.baseURL}/exists/${name}`;
    return this.httpClient.get<boolean>(url,this.options);
  }
}
