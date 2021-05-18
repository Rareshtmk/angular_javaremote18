import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedItem: any;
  items: Array<any> = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe((response: any)=>{
      console.log("get items from db");
      console.log(response);
      // la aceasta linie setam in variabila items rezultatul din response
      this.items=response.result;
    })
  }

  onReceiveItem(item: any): void {
    console.log('onReceiveItem');
    console.log(item);
    this.itemsService.createItem(item).subscribe((response: any)=>{
  // adaugam elementul primit in lista
        this.items.push(response.result);
        console.log(this.items);

        console.log(response);
    })
    
  }

  onEditItem(item: any): void {
    this.itemsService.updateItem(item.id, item).subscribe((response: any)=>{
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item.id) {
          this.items[i] = response.result;
        }
      }
      this.selectedItem = null;
      
    })
    
  }

  onDeleteItem(itemId: any): void {
    this.itemsService.deleteItemForever(itemId).subscribe((response: any)=>{
      this.items = this.items.filter((item: any) => item.id != itemId);
      this.selectedItem = null;
      console.log(response);
    })
    
  }

  onSelectedItemFromList(item: any): void {
    console.log('item from dashboard');
    console.log(item);
    this.selectedItem = item;
  }
}
