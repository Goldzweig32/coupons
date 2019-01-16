import { Component, OnInit, assertPlatform } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LayoutComponent } from '../layout/layout.component';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  private login: Login = new Login();

  constructor(private loginService: LoginService,private registerService: RegisterService,private title: Title) {
    // this.router.navigate['/login'];
   }

  ngOnInit() {
    this.title.setTitle("Login");
  }

  public loginMetod(): void{
    alert("why?");
    let observable = this.loginService.login(this.login);
    observable.subscribe(userId => {
      alert("user successful login. ID: " + userId.id);
      sessionStorage.setItem('id',JSON.stringify(userId.id));
      sessionStorage.setItem('user',JSON.stringify(this.login));
      sessionStorage.setItem('userType',this.login.getUserType());
      sessionStorage.setItem('isLoggedIn',"true");
    })
     // this.router.navigate(['/home']);
    // this.router.navigateByUrl('/home');
  }
  
  public registerMetod(): void{
    alert(JSON.stringify(this.login));
    let observable = this.registerService.register(this.login);
    observable.subscribe(userId => {
      alert("user created successfuly. ID: " + userId.id);
      sessionStorage.setItem('id',JSON.stringify(userId.id));
      sessionStorage.setItem('user',JSON.stringify(this.login));
      sessionStorage.setItem('userType',this.login.getUserType());
      sessionStorage.setItem('isLoggedIn',"true");
    })
  }
   
    
}



