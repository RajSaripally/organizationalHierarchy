import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  TeamData: any;
  organization: string;
  location: string;
  Fistteamshow = 'true';
  Secondteamshow = 'true';
  wholeTeam = 'true';
  personalInfo = 'false';
  firstTeam: any;
  secodTeam: any;

  constructor(private http: Http, private router: Router) {

    this.http.get('assets/sampleData.json').map(res => res.json())
    .subscribe(res => {
      this.TeamData = res;
      this.firstTeam = this.TeamData.teams[0];
      this.secodTeam = this.TeamData.teams[1];
      this.location = this.TeamData.location;
      this.organization = this.TeamData.organization;
    });
  }

  goAbout(member) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "name": member.name,
            "age": member.age,
            "image": member.imageUrl,
            "profile": member.profile
        }
    };
    this.router.navigate(['about'], navigationExtras);
    this.personalInfo = 'true';
  }

  showFirstTeam() {
    this.Fistteamshow = (this.Fistteamshow === 'false') ? 'true' : 'false';
  }

  showSecondTeam() {
    this.Secondteamshow = (this.Secondteamshow === 'false') ? 'true' : 'false';
  }

  showWholeTeam() {
    this.wholeTeam = (this.wholeTeam === 'false') ? 'true' : 'false';
  }

  backToHome() {
    this.personalInfo = 'false';
    this.router.navigate(['../']);
  }

}
