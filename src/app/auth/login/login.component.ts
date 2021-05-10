import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
