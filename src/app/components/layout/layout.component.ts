import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isCompany(): boolean{
    return (sessionStorage.getItem('userType') == "COMPANY");
  }

  public isCustomer(): boolean{
    return (sessionStorage.getItem('userType') == "CUSTOMER");
  }
  
  
}
