import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  private coupon: Coupon = new Coupon(); 
  private eDate: Date;

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Create Coupon");
    let dateFormat = require('dateformat');
    let now = new Date;
    dateFormat(now,"dd.mm.yy");
    this.coupon.setStartDate(now);
  }
  

  public createCoupon(): void{
    this 
    let ob = this.couponsService.createCoupon(this.coupon);
      alert("Coupon created successfully.");
  }
}
