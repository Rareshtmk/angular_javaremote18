import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prima aplicatie in Angular';
  showTitle: boolean = true;
  languages: Array<string>=["java", "c++", "java script"];
  
  onShowChange(): void {
    this.showTitle = !this.showTitle;
  }
}
