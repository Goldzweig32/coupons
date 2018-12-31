import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Login } from '../models/login';
import { UserId } from '../models/user-id';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<UserId>{
    return this.http.post<UserId>("http://localhost:8080/couponSpringV2/rest/login",login);
  }
}
