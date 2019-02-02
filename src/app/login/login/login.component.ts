import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {User} from '../../communication/user.interface';
import {AuthService} from '../../communication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      const user: User = this.getUser();
      if (this.authService.validateUser(user)) {
        this.router.navigate(['contacts']);
      } else {
        alert(this.authService.getInvalidUserMessage(user));
      }
    }
  }

  private getUser(): User {
    return {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
  }

}




