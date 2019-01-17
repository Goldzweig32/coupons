import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-profile-customer',
  templateUrl: './update-profile-customer.component.html',
  styleUrls: ['./update-profile-customer.component.css']
})
export class UpdateProfileCustomerComponent implements OnInit {

  private customer:Customer = new Customer();

  constructor(private title: Title,private customerService: CustomersService) { }

  ngOnInit() {
    this.title.setTitle("Update Profile");
    this.customerService.getCustomer(parseInt(sessionStorage.getItem("id"))).subscribe(customer => {
      return this.customer = customer;
    });
  }

  public updateCustomer(){
    this.customerService.updateCustomer(this.customer).subscribe(customer => alert("Profile Updated Successfully"))
  }

}
