import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  private coupon: Coupon = new Coupon(); 

  constructor(private title: Title,private couponService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Update Profile");
    this.couponService.getCoupon(parseInt(sessionStorage.getItem('couponId'))).subscribe(couponDB => this.coupon = couponDB);
    this.coupon.couponTypeToUpperCase();
  }

  public updateCoupon(){
    this.couponService.updateCoupon(this.coupon).subscribe(coupon => alert("Coupon Updated Successfully"));
  }

}
