import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder) {

    // const contact: Contact = this.data['contact'];
    this.loginForm = this.formBuilder.group({
      'user': ['', Validators.min(1)],
      'password': ['', Validators.min(1)]
    });
  }

  login(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      // return {
      //   firstName: this.loginForm.value.firstName,
      //   lastName: this.loginForm.value.lastName,
      //   phoneNumber: this.loginForm.value.phoneNumber,
      //   email: this.loginForm.value.email
      // };
      alert(this.loginForm.value.user);
    }
  }
}




