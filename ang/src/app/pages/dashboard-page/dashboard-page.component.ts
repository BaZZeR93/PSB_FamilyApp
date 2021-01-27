import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Content } from 'src/app/models/contentEnum';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  user: any;
  users: User[];
  
  public ContentEnum = Content;
  public selectedContent: Content = Content.Wall;
  public moneyToAdd: number = 0;

  constructor(
    private router: Router,
    private userService: UserService)
  {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  switchTab(tab: Content) {
    this.selectedContent = tab;

    if (tab === Content.Budget) {
      this.getUsers();
    }
  }

  logoutUser() {
    this.router.navigate(['/login']);
  }

  getUsers() {
    this.userService.listUser().subscribe((data: any) => {
        this.users = data;
    });
  }

  addMoney() {
   this.userService.addMoney(this.user.id, this.moneyToAdd).subscribe(() => {
      this.user.budget += this.moneyToAdd;
    });
  }

  tapHomeButton() {
    this.switchTab(Content.Wall);
  }
}
