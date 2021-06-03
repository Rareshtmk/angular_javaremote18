import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { CategoriesService } from '../categories/categories.service';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedItem: any;
  selectedCategory: any;
  items: Array<any> = [];
  categories: Array<any> = [];

  constructor(private itemsService: ItemsService, private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe((response: any)=>{
      console.log("get items from db");
      console.log(response);
      // la aceasta linie setam in variabila items rezultatul din response
      this.items=response.result;
    })
    this.categoryService.getAllCategories().subscribe((response: any)=>{
      console.log("get categories from db");
      console.log(response);
      this.categories = response.result;
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
  onReceiveCategory(category: any): void {
    console.log("onReceiveCategory");
    console.log(category);
    this.categoryService.createCategory(category).subscribe((response: any)=>{
      this.categories.push(response.result);
      console.log(this.categories);
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

  onEditCategory(category: any): void {
    console.log('onEditCategory');
    console.log(category);
    this.categoryService.updateCategory(category.id, category).subscribe((response: any)=>{
      for(let i=0; i < this.categories.length; i++) {
        if(this.categories[i].id == category.id) {
          this.categories[i] = response.result;
        }
      }
      this.selectedCategory = null;
    })
  }

  onDeleteItem(itemId: any): void {
    this.itemsService.deleteItemForever(itemId).subscribe((response: any)=>{
      this.items = this.items.filter((item: any) => item.id != itemId);
      this.selectedItem = null;
      console.log(response);
    })
    
  }

  onDeleteCategory(categoryId: any): void {
    console.log('onDeleteCategory');
    console.log(categoryId);
    this.categoryService.deleteCategoryForever(categoryId).subscribe((response: any)=>{
      this.categories = this.categories.filter((category: any) => categoryId != category.id);
      this.selectedCategory = null;
      console.log(response);
    })
  }

  onSelectedItemFromList(item: any): void {
    console.log('item from dashboard');
    console.log(item);
    this.selectedItem = item;
  }

  onSelectedCategoryFromList(category: any): void {
    console.log('category from dashboard');
    console.log(category);
    this.selectedCategory = category;
  }
}

