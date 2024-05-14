import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html'
})
export class FiltersComponent implements OnInit {
  categories = ['shoes', 'shirts','shorts']
  @Output() showCategory = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }
}
