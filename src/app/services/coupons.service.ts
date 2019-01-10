import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http: HttpClient) { }


  public getCoupons(): Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8080/couponSpringV2/rest/coupons",{ withCredentials: true});
  }

  public createCoupon(coupon: Coupon): Observable<Coupon>{
    alert(JSON.stringify(coupon));
    return this.http.post<Coupon>("http://localhost:8080/couponSpringV2/rest/coupons",coupon,{ withCredentials: true});
  }
  
}
