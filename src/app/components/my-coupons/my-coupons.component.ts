import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {

  public myCoupons: Coupon[];

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("My Coupons");
    let id = parseInt(sessionStorage.getItem("id"));
    this.couponsService.getCouponsByCustomerId(id).subscribe(coupons => this.myCoupons = coupons);
  }

}
