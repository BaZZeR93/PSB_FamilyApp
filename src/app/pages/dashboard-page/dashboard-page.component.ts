import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Content } from 'src/app/models/contentEnum';
import { UserService } from 'src/app/services/user.service';

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
    private auth: AuthenticationService,
    private router: Router,
    private userService: UserService)
  {}

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }

  switchTab(tab: Content) {
    this.selectedContent = tab;

    if (tab === Content.Budget) {
      this.getUsers();
    }
  }

  logoutUser() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  getUsers() {
    this.userService.listUsers().subscribe((data: any) => {
      // if (!this.users) {
        this.users = data.userList;

      //   return;
      // }

      // for (var idx = 0; idx < data.userList.length; idx++) {
      //   var ok = true;

      //   for (var j = 0; j < this.users.length; ++j) {
      //     if (data.userList[idx].id === this.users[j].id) {
      //       ok = false;
      //     }
      //   }

      //   if (ok) {
      //     this.users.push(data.userList[idx]);
      //   }
      // }
    });
  }

  addMoney() {
    for (var idx = 0; idx < this.users.length; idx++) {
      if (this.users[idx].id === this.user.id) {
        this.users[idx].budget += this.moneyToAdd;
        break;
      }
    }

    this.userService.addMoney(this.user, this.moneyToAdd).subscribe(() => {
      this.getUsers();
    });
  }
}
