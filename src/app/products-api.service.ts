import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private _HttpClient:HttpClient) { }


  getProducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
}
