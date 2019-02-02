import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  private company:Company = new Company();

  constructor(private title: Title,private companiesService: CompaniesService) { }

  ngOnInit() {
    this.title.setTitle("Update Profile");
    this.companiesService.getCompany(parseInt(sessionStorage.getItem("id"))).subscribe(company => {
      return this.company = company;
    });
  }

  public updateCompany(){
    this.companiesService.updateCompany(this.company).subscribe(company => alert("Profile Updated Successfully"));
  }
}
