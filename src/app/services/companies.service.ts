import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private url = "http://localhost:8080/couponsHibernate/rest/companies";

  constructor(private http: HttpClient) { }

  // public registerCompany(company: Company): Observable<Company>{
  //   return this.http.post<Company>(this.url,company,{ withCredentials: true});
  // }

  public deactivateCompany(id:number):Observable<Company>{
    return this.http.delete<Company>(this.url + "/companies/" + id,{ withCredentials: true});
  }

  public updateCompany(company: Company):Observable<Company>{
    return this.http.put<Company>(this.url + "/update",company,{ withCredentials: true});
  }

  public getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.url,{ withCredentials: true});
  }

  public getCompany(id:number):Observable<Company>{
    return this.http.get<Company>(this.url + "/showCompany/" + id,{ withCredentials: true});
  }

 }
