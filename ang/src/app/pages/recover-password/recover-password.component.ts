import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  recoverPassword(email: string, event: Event) {
    event.preventDefault()
      console.log(email)

      // TODO Write this method as the one  in the log-in.component.ts and create an api method where it should send its request
    //   this.userService.authUser(email).subscribe(
    //     (response: any) => this.onSuccess(response),
    //     (error: any) => this.onError(error)
    //   );
     // console.log(email,pass)\

     this.onSuccess("success")
  }
  onSuccess(response: string) {
    console.log(response)
    this.router.navigate(["login"]);
  }

  onError(error: any) {
    console.log(error)
    this.router.navigate(["login"])
  }

  goToLogin() {
    console.log("navigated to login")
    this.router.navigate(["login"]);
  }
}
