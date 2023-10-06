import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontale-list',
  templateUrl: './horizontale-list.component.html',
  styleUrls: ['./horizontale-list.component.css']
})
export class HorizontaleListComponent {
  @Input() row: any = {};
  @Input() rowID: number = 0;
  categoryName = '';
  categoryItems: any[] = [];

  ngOnInit() {
    this.categoryItems = this.row.data || []; // Initialize categoryItems with an empty array if data is undefined
    this.categoryName = this.row.header || '';
  }

  slideLeft(): void {
    const slider = document.getElementById('slider' + this.rowID);
    console.log(slider)
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  }

  slideRight(): void {
    const slider = document.getElementById('slider' + this.rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  }
}