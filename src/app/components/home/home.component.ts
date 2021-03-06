import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allCoupons: Coupon[];

  constructor(private title: Title, private couponsService: CouponsService) { }

  ngOnInit() {
    this.title.setTitle("Home");
    this.couponsService.getCoupons().subscribe(coupons => this.allCoupons = coupons);
  }

}
