import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Content } from 'src/app/models/contentEnum';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  user: any;
  public ContentEnum = Content;
  public selectedContent: Content = Content.Wall;

  constructor(
    private auth: AuthenticationService,
    private router: Router)
  {}

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }

  switchTab(tab: Content) {
    this.selectedContent = tab;
  }

  logoutUser() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
