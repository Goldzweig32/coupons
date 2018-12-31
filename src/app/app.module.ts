import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';

const routes: Routes = [
   { path: "", redirectTo:"login", pathMatch: "full"},
   { path: "home", component: LayoutComponent}
];

@NgModule({
  declarations: [ 
  LoginComponent,
  LayoutComponent,  
  MenuComponent,
  AppComponent
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
