import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggin(): boolean{
    return JSON.parse(sessionStorage.getItem('isLoggedIn'));
  }

  public isNeedRegistration(): boolean{
      return JSON.parse(sessionStorage.getItem('needRegistration'));
  }
}

