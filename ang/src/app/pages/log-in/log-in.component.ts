import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logIn(email: string, pass: string) {
    console.log(email, pass)
    this.userService.authUser(email,pass).subscribe((response: any) => {
      console.log(response);
    });
  }

  goToRegister(par: boolean){
    console.log("navigated to register")
  }
}
