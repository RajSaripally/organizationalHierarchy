import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: any;
  age: any;
  image: any;
  memberData: any;
  personalInfo: any;
  profile: any;

  constructor(private activate: ActivatedRoute) {

    this.activate.queryParams.subscribe(params => {

      this.name = params["name"];
      this.age = params["age"];
      this.image = params["image"];
      this.profile = params["profile"];
    });
  }

  ngOnInit() {
  }

}
