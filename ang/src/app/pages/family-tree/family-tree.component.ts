import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Content } from 'src/app/models/contentEnum';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
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

    
    if (tab === Content.FamilyTree) {
      this.router.navigate(['/dashboard/familytree']);
    }
    else{
      this.router.navigate(['/dashboard']);
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
  }
}
