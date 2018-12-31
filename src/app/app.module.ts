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

const routes: Routes = [
   { path: "", redirectTo:"home", pathMatch: "full"},
   { path: "home", component: HomeComponent},
   { path: "coupons", component: CouponsComponent},
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
  AboutComponent
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
