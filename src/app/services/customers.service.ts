import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url = "http://localhost:8080/couponSpringV2/rest/customers";

  constructor(private http: HttpClient) { }

  public registerCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.url,customer,{ withCredentials: true});
  }

  public deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(this.url + "?id=" + id,{ withCredentials: true});
  }

  public updateCustomer(customer: Customer):Observable<Customer>{
    return this.http.put<Customer>(this.url,customer,{ withCredentials: true});
  }

  public getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url,{ withCredentials: true});
  }

  public getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.url +"/showCustomer?id=" + id,{ withCredentials: true});
  }
}
