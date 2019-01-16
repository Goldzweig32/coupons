import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public logout():void {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userType');
  }

}
