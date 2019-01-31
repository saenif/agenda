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
      'userName': ['', Validators.minLength(2)],
      'password': ['', Validators.minLength(2)]
    });
  }

  login(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      const user: User = {
        userName: this.loginForm.value.userName,
        password: this.loginForm.value.password
      };

      if (this.authService.validateUser(user)) {
        alert(user.userName);
        this.router.navigate(['contacts']);
      }
    }
  }
}




