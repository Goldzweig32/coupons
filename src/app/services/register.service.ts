import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { UserId } from '../models/user-id';
import { Company } from '../models/company';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private company: Company = new Company();
  private customer: Customer = new Customer();

  constructor(private http: HttpClient) { }

  public register(login: Login,name: string): Observable<UserId>{
    if (login.getUserType() == "COMPANY") {
      this.company.setCompanyName(name);
      this.company.setCompanyEmail(login.getUserEmail());
      this.company.setCompanyPassword(login.getUserPassword());
      return this.http.post<UserId>("http://localhost:8080/couponSpringV2/rest/companies/register",this.company,{ withCredentials: true});
    } 
    else {
      this.customer.setCustomerName(name);
      this.customer.setCustomerEmail(login.getUserEmail());
      this.customer.setCustomerPassword(login.getUserPassword());
      return this.http.post<UserId>("http://localhost:8080/couponSpringV2/rest/customers/register",this.customer,{ withCredentials: true});
    }
    
  }
}
