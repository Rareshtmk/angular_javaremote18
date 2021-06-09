import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCloseDialog(): void{
    this.dialog.closeAll();
  }

}
