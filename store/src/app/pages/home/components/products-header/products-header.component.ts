import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  sort ='desc';
  itemsShowCount=12;
  @Output() columnsCountChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
}
