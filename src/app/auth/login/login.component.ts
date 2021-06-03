import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void { }

  onLogin(): void {
    this.userService.setUser({
      accountNonExpired: true,
      accountNonLocked: true,
      authorities: [],
      credentialsNonExpired: true,
      email: "maxim@florin.com",
      enabled: true,
      firstName: "maxim",
      id: 1,
      lastName: "florin",
      password: "$2a$10$vbDADkl1oAQoTKuggHTpm.S/47wIoI56FTlp5BZDmCk9Ff.GQq/um",
      username: "maxim@florin.com",
      token: "token"
    })
    this.router.navigate(["/", "dashboard"])
    // console.log(this.loginForm.value);
    // this.authService.login(this.loginForm.value).subscribe((response: any) => {
    //   console.log(response);

    //   if (response.status == 200) {
    //     let user = response.result.user;
    //     user.token = response.result.token;
    //     this.userService.setUser(user);

    //     this.router.navigate(["/", "dashboard"])
    //   } else {
    //     alert(response.error);
    //   }

    // }, (error) => {
    //   console.log(error);
    // }
    // );

  }
}
