import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-customer-coupons',
  templateUrl: './customer-coupons.component.html',
  styleUrls: ['./customer-coupons.component.css']
})
export class CustomerCouponsComponent implements OnInit {

  public allCoupons: Coupon[];

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Coupons");
    this.couponsService.getCoupons().subscribe(coupons => this.allCoupons = coupons);
  }

  public purchaseCoupon(id:number):void{
    this.couponsService.purchaseCoupon(id).subscribe(purchase => alert("Purchase Coupon successed"));
  }
}
