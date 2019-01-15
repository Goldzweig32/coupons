import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.service';
import { Title } from '@angular/platform-browser';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-our-coupons',
  templateUrl: './our-coupons.component.html',
  styleUrls: ['./our-coupons.component.css']
})
export class OurCouponsComponent implements OnInit {

  public ourCoupons: Coupon[];
  
  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Our Coupons");
    let id = parseInt(sessionStorage.getItem("id"));
    this.couponsService.getCouponsByCompany(id).subscribe(coupons => this.ourCoupons = coupons);
  }

}
