import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'recover-password-page',
  templateUrl: './recover-password-page.component.html',
  styleUrls: ['./recover-password-page.component.css']
})
export class RecoverPasswordPageComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.recoverForm = this.formBuilder.group({
      email: ['', Validators.required],
    })
  }

  // Convenience getter for easy access to form fields
  get f() { return this.recoverForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Exit function if form is invalid
    if (this.recoverForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.recover(this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success('An email was sent to your address');
          this.router.navigate(['/login']);
        },
        error => {
          this.toastr.error(error);
          this.loading = false;
        }
      )
  }
}
