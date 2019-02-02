import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';
import { MyDate } from 'src/app/models/my-date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  private coupon: Coupon = new Coupon(); 
  private date: MyDate = new MyDate();

  constructor(private title: Title, private couponsService: CouponsService, private router:Router) { }

  ngOnInit() {
    this.title.setTitle("Create Coupon");
    let now = new Date();
    this.date.setDay(now.getUTCDate()); 
    this.date.setMonth(now.getMonth()+1);
    this.date.setYear(now.getUTCFullYear());
    this.coupon.setStartDate(this.date.toString());
    this.coupon.setCompanyId(parseInt(sessionStorage.getItem('id')));


  }
  
  public createCoupon(): void{
    this.couponsService.createCoupon(this.coupon).subscribe(coupon => {alert("Coupon created successfully.")
    this.router.navigate(['home']);
  });   
  }
}
