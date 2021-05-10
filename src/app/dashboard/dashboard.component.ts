import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedItem: any;
  items: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  onReceiveItem(item: any): void {
    console.log('onReceiveItem');
    console.log(item);
    // adaugam elementul prin in lista
    this.items.push(item);
    console.log(this.items);
  }

  onEditItem(item: any): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == item.id) {
        this.items[i] = item;
      }
    }
    this.selectedItem = null;
  }

  onDeleteItem(itemId: any): void {
    this.items = this.items.filter((item: any) => item.id != itemId);
    this.selectedItem = null;
  }

  onSelectedItemFromList(item: any): void {
    console.log('item from dashboard');
    console.log(item);
    this.selectedItem = item;
  }
}
