import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnChanges {
  @Input() data: any = {};
  bannerHeading = ""
  bannerImageURL = ""
  bannerDescription = ""

  tuncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && !changes['data'].firstChange) {
      this.bannerHeading = this.data.heading
      this.bannerImageURL = this.data.photos[0].photoTypes[2].url
      this.bannerDescription = this.tuncateString(this.data.lead.substring(3).slice(0, -4), 200)
      console.log('Banner Image URL:', this.bannerImageURL);

    }
  }
}