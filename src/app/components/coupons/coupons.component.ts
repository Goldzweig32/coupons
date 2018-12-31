import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  
  public allCoupons: Coupon[];

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Coupons");
    this.couponsService.getCoupons().subscribe(coupons => this.allCoupons = coupons);
  }


}
