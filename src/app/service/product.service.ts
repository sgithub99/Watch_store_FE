import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
const UrlApi = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(UrlApi);
  }

  findId(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${UrlApi}/${id}`);
  }
}
