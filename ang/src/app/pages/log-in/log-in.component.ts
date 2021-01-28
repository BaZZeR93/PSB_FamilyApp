import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logIn(email: string, pass: string, event: Event) {
    event.preventDefault()
      console.log(email, pass)
      this.userService.authUser(email,pass).subscribe(
        (response: any) => {
          this.onSuccess(response);
          localStorage.setItem('user', JSON.stringify(response));
        },
        (error: any) => this.onError(error)
      );
     // console.log(email,pass)
  }
  onSuccess(response: string) {
    console.log(response)
    this.router.navigate(["dashboard"]);
  }

  onError(error: any) {
    console.log(error)
    this.router.navigate(["login"])
  }

  goToRegister() {
    console.log("navigated to register")
    this.router.navigate(["register"]);
  }

  goToRecoverPassword() {
    console.log("navigated to recover password")
    this.router.navigate(["recover-password"]);
  }
}
