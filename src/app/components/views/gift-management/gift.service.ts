import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../../models/ProductAndGiftManagement/gift';
import { Product } from '../../models/ProductAndGiftManagement/product';


@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private baseURL = "http://localhost:8082/PharmaLife/Gift";

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  addGift(giftId:number,product:Product): any {
    return this.httpClient.post("http://localhost:8082/PharmaLife/Gift/"+`${giftId}`+"/products",product,this.options);
  }
  removeProductFromGift(giftId:number,product:Product): any {
    return this.httpClient.post("http://localhost:8082/PharmaLife/Gift/"+`${giftId}`+"/product-delete",product,this.options);
  }

  getGifts(): Observable<Gift[]> {
    return this.httpClient.get<Gift[]>(`${this.baseURL}` + "/all-gifts",this.options);
  }
  myGifts(idUser:number): Observable<Gift[]> {
    return this.httpClient.get<Gift[]>(`${this.baseURL}` + "/myGifts/"+idUser,this.options);
  }

  getDuplicatedProduct(idGift:number,idProduct:number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}` + "/checkDuplication/"+idGift+"/"+idProduct,this.options);
  }

}
