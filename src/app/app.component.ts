import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'err-frontend-proovitoo';
  bannerData = {}
  rows = []

  ngOnInit() {
    fetch("https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee")
    .then(async response => {
      if (response.ok) {
        const data = await response.json();
        this.rows = data.data.category.frontPage
        this.bannerData = data.data.category.frontPage[0].data[0];
        this.rows.splice(0,1)
        this.rows.splice(1,1)
        this.rows.splice(20, 1);
      } else {
        console.error('Failed to fetch data:', response.status);
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
    
  }
}
