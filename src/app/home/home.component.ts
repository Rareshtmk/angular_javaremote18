import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
import { ItemsService } from '../products/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<any> = [];
  categories: Array<any> = [];
  subcategories: Array<any> = [];

  constructor(private itemsService: ItemsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe((response: any) => {
      console.log('get items from db');
      console.log(response);
      // la aceasta linie setam in variabila items rezultatul din response
      this.products = response.result;
    });
    this.categoriesService.getAllCategories().subscribe((response: any) => {
      console.log('get categories from db');
      console.log(response);
      this.categories = response.result;
    });

    this.categoriesService.getAllSubCategories().subscribe((response: any) => {
      console.log('get sub categories from db');
      console.log(response);
      this.subcategories = response.result;
    });
  }

}
