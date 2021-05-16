import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const UrlApi = "http://localhost:3000/accounts";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  create(data: Account):Observable<Account>{
    return this.httpClient.post<Account>(UrlApi, data);
  }

  getAll():Observable<Account[]>{
    return this.httpClient.get<Account[]>(UrlApi);
  }
}
