import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  private url = "http://localhost:8080/couponSpringV2/rest/coupons";

  constructor(private http: HttpClient) { }

  public createCoupon(coupon: Coupon): Observable<Coupon>{
    return this.http.post<Coupon>(this.url,coupon,{ withCredentials: true});
  }

  public purchaseCoupon(id:number):Observable<Coupon>{
    return this.http.post<Coupon>(this.url + "/purchaseCoupon" , id,{ withCredentials: true});
  }

  public deleteCoupon(id:number):Observable<Coupon>{
    return this.http.delete<Coupon>(this.url + "/" + id,{ withCredentials: true});
  }

  public updateCoupon(coupon: Coupon):Observable<Coupon>{
    return this.http.put<Coupon>(this.url,coupon,{ withCredentials: true});
  }

  public getCoupons(): Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url,{ withCredentials: true});
  }

  public getCoupon(id:number):Observable<Coupon>{
    return this.http.get<Coupon>(this.url + "/showCoupon/" + id,{ withCredentials: true});
  }

  public getCouponsByType(couponType: string):Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url + "/showCouponsByType/" + couponType,{ withCredentials: true});
  }

  public getCouponsUpToPrice(price: number):Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url + "/showCouponsUpToPrice/" + price,{ withCredentials: true});
  }

  public getCouponsUpToDate(couponEndDate: string):Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url + "/getCouponsUpToDate/" + couponEndDate,{ withCredentials: true});
  }

  public getCouponsByCustomerId(customerId: number):Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url + "/showCouponsByCustomer/" + customerId,{ withCredentials: true});
  }

  public getCouponsByCompany(companyId: number):Observable<Coupon[]>{
    return this.http.get<Coupon[]>(this.url + "/showCouponsByCompany/" + companyId,{ withCredentials: true});
  }
}
