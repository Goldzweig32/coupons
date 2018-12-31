import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login = new Login();

  constructor(private loginService: LoginService,private title: Title,private router:Router) {
    // this.router.navigate['/login'];
   }

  ngOnInit() {
    this.title.setTitle("Login");
  }

  public send(): void{
    let ob = this.loginService.login(this.login);
    ob.subscribe(userId => alert("user successful login. ID: " + userId.id));
    this.router.navigate(['/home']);
    // this.router.navigateByUrl('/home');
    
  }

}
