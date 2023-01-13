import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [...Array(100).keys()].map((x) => ({
    title: `Slide ${x + 1}`,
  }));
}
