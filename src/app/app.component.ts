import { Component, OnInit } from '@angular/core';
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

  constructor(public userService: UserService) {
    
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
        route: "/home",
      },
      {
        id: "3",
        icon: "shopping_cart",
        title: "Order",
        route: "/home",
      },
      {
        id: "4",
        icon: "account_circle",
        title: "My Account",
        route: "/home",
      },
      {
        id: "5",
        icon: "admin_panel_settings",
        title: "Admin",
        route: "/home",
      },
      {
        id: "6",
        icon: "logout",
        title: "Logout",
        route: "/home",
      }
    ]
  }

  public showInfo(option: any): void {
    console.log(option);
  }
}