import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  @Input() itemsList: Array<any>=[];
  @Output() selectItemEvent: EventEmitter<any>;

  constructor() {
    this.selectItemEvent=new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelectItem(item: any): void {
    console.log(item);
    this.selectItemEvent.emit(item);
  }

}
