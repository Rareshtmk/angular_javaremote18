import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    events: string[] = [];
  opened: boolean = false;
  menuOptions: Array <any> = [];

  constructor(public userService: UserService, public router: Router) {
    
  }

  ngOnInit(): void {
    this.menuOptions = [
      {
        id: "1",
        icon: "home",
        title: "Home",
        route: "/home",
      },
      {
        id: "2",
        icon: "category",
        title: "Categories",
        route: "/categories",
      },
      {
        id: "3",
        icon: "shopping_cart",
        title: "Order",
        route: "/order",
      },
      {
        id: "4",
        icon: "account_circle",
        title: "My Account",
        route: "/my-account",
      },
      {
        id: "5",
        icon: "admin_panel_settings",
        title: "Admin",
        route: "/dashboard",
      },
      {
        id: "6",
        icon: "logout",
        title: "Logout",
        route: "",
      }
    ]
  }

  public showInfo(option: any, sidenav: any): void {
    sidenav.toggle();
    console.log(option);
    switch(option.id){
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      this.router.navigateByUrl(option.route);
      break;
      case "6":
      this.userService.logOut();
      break;    
    }
  }
}