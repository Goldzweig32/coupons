import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.service';
import { Title } from '@angular/platform-browser';
import { PercentPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-coupons',
  templateUrl: './our-coupons.component.html',
  styleUrls: ['./our-coupons.component.css']
})
export class OurCouponsComponent implements OnInit {

  public ourCoupons: Coupon[];
  
  constructor(private title: Title, private couponsService: CouponsService,private router: Router) { }

  ngOnInit() {
    this.title.setTitle("Our Coupons");
    let id = parseInt(sessionStorage.getItem("id"));
    this.couponsService.getCouponsByCompany(id).subscribe(coupons => this.ourCoupons = coupons);
  }

  public deleteCoupon(id:number):void{
    this.couponsService.deleteCoupon(id).subscribe(deleteCoupon => {
      alert("Delete Coupon successed");
      this.router.navigate(['home']);
    })
  }

  public updateCoupon(id: number):void{
    alert(JSON.stringify(id));
    sessionStorage.setItem('couponId',JSON.stringify(id));
    this.router.navigate(['updateCoupon']);
  }

}
