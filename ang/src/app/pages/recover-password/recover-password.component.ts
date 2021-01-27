import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  recoverPassword(email: string, event: Event) {
    event.preventDefault()
    console.log("email=" + email)

    this.userService.recover(email)
      .subscribe(
      data => {
        if (data["success"]) {
          this.toastr.success('An email was sent to your address');
          this.onSuccess("success");
        } else {
          this.toastr.error("No user found for email " + email);
          this.onError("No user found for email " + email);
        }
      },
      error => {
        this.toastr.error(error);
        this.onError("recover service error");
      });

     this.onSuccess("success");
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
