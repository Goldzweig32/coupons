import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { UserId } from '../models/user-id';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public register(login: Login): Observable<UserId>{
    if (login.getUserType() == "COMPANY") {
      
      return this.http.post<UserId>("http://localhost:8080/couponSpringV2/rest/companies",login,{ withCredentials: true});
    } else {
      
      return this.http.post<UserId>("http://localhost:8080/couponSpringV2/rest/customers",login,{ withCredentials: true});
    }
    
  }
}
