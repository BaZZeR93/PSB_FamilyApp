import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  CreateNewAccount(name: string, email: string, pass: string, pass2: string) {
    if(pass.localeCompare(pass2) == 0) {
      this.userService.createUser(name, email, pass).subscribe();
      this.router.navigate(["login"]);
    }
    else{
      console.log("err")
    }
  }
}
