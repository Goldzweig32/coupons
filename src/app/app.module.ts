import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { AboutComponent } from './components/about/about.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { OurCouponsComponent } from './components/our-coupons/our-coupons.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CustomerMenuComponent } from './components/customer-menu/customer-menu.component';
import { UpdateProfileCustomerComponent } from './components/update-profile-customer/update-profile-customer.component';
import { MyCouponsComponent } from './components/my-coupons/my-coupons.component';
import { CouponsByCategoryComponent } from './components/coupons-by-category/coupons-by-category.component';
import { CustomerCouponsComponent } from './components/customer-coupons/customer-coupons.component';
import { CustomersHomeComponent } from './components/customers-home/customers-home.component';

const routes: Routes = [
   { path: "", redirectTo:"home", pathMatch: "full"},
    // { path: "login", component: LoginComponent}, 
   { path: "home", component: HomeComponent},
   { path: "customersHome", component:CustomersHomeComponent},
   { path: "coupons", component: CouponsComponent},
   { path: "CustomerCoupon", component:CustomerCouponsComponent},
   { path: "createCoupon", component: CreateCouponComponent},
   { path: "OurCoupons", component: OurCouponsComponent},
   { path: "CouponsByCategory", component: CouponsByCategoryComponent},
   { path: "MyCoupons", component: MyCouponsComponent},
   { path: "UpdateProfile", component: UpdateProfileComponent},
   { path: "UpdateCustomerProfile", component: UpdateProfileCustomerComponent},
   { path: "about", component: AboutComponent}
];


@NgModule({
  declarations: [ 
  LoginComponent,
  LayoutComponent,  
  MenuComponent,
  AppComponent,
  HomeComponent,
  CouponsComponent,
  AboutComponent,
  CreateCouponComponent,
  OurCouponsComponent,
  UpdateProfileComponent,
  CustomerMenuComponent,
  UpdateProfileCustomerComponent,
  MyCouponsComponent,
  CouponsByCategoryComponent,
  CustomerCouponsComponent,
  CustomersHomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
