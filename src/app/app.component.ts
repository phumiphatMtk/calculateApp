import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subText: string;
  mainText: string;

  constructor() {
    this.subText = '';
    this.mainText = '';
  }

  pressKey(key: string) {

  }

  allClear() {
    this.subText = '';
    this.mainText = '';
  }

  getAnswer() {

  }


}
