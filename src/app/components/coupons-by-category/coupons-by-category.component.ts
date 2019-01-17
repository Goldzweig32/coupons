import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-coupons-by-category',
  templateUrl: './coupons-by-category.component.html',
  styleUrls: ['./coupons-by-category.component.css']
})
export class CouponsByCategoryComponent implements OnInit {

  public vacationCoupons: Coupon[];
  public foodCoupons: Coupon[];
  public sportsCoupons: Coupon[];
  public electricityCoupons: Coupon[];
  public resturantsCoupons: Coupon[];
  public healthCoupons: Coupon[];
  public campingCoupons: Coupon[];
  public travellingCoupons: Coupon[];

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Coupons By Category");
    this.couponsService.getCouponsByType("VACATION").subscribe(coupons => this.vacationCoupons = coupons);
    this.couponsService.getCouponsByType("FOOD").subscribe(coupons => this.foodCoupons = coupons);
    this.couponsService.getCouponsByType("SPORTS").subscribe(coupons => this.sportsCoupons = coupons);
    this.couponsService.getCouponsByType("ELECTRICITY").subscribe(coupons => this.electricityCoupons = coupons);
    this.couponsService.getCouponsByType("RESTURANTS").subscribe(coupons => this.resturantsCoupons = coupons);
    this.couponsService.getCouponsByType("HEALTH").subscribe(coupons => this.healthCoupons = coupons);
    this.couponsService.getCouponsByType("CAMPING").subscribe(coupons => this.campingCoupons = coupons);
    this.couponsService.getCouponsByType("TRAVELLING").subscribe(coupons => this.travellingCoupons = coupons);
  }

  public purchaseCoupon(id:number):void{
    this.couponsService.purchaseCoupon(id).subscribe(purchase => alert("Purchase Coupon successed"));
  }
}
