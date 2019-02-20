import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private title: Title, private registerService: RegisterService,private router: Router) { }

  private login: Login = new Login();
  private userName: string;

  ngOnInit() {
    this.title.setTitle("Registration");
  }

  public registerMethod(): void{
    let observable = this.registerService.register(this.login, this.userName);
    observable.subscribe(userId => {
      alert("user created successfuly. ID: " + userId.id);
      sessionStorage.setItem('id',JSON.stringify(userId.id));
      sessionStorage.setItem('user',JSON.stringify(this.login));
      sessionStorage.setItem('userType',this.login.getUserType());
      sessionStorage.setItem('isLoggedIn',"true");
      if(this.login.getUserType() == "CUSTOMER"){
        this.router.navigate(['customersHome']);
      } else{
        this.router.navigate(['home']);
      }
    })

  }

  public loginPage(): void{
    sessionStorage.setItem('needRegistration',"false");
   
  }
}
