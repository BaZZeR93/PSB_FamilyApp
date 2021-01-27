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
    this.user = this.userService.loggedUser;
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
        this.users = data.userList;
    });
  }

  addMoney() {
    for (var idx = 0; idx < this.users.length; idx++) {
      if (this.users[idx].id === this.user.id) {
        this.users[idx].budget += this.moneyToAdd;
        break;
      }
    }

    // this.userService.addMoney(this.user, this.moneyToAdd).subscribe(() => {
    //   this.getUsers();
    // });
  }

  tapHomeButton() {
    this.switchTab(Content.Wall);
  }
}
