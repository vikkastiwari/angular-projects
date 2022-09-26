import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  key:string = 'chain khuli ki main khuli';
  display:boolean = false;
  logs:string [] = [];

  setBlue(){
    return 'blue';
  }

  onDisplayDetails(){
    this.display = !this.display;
    let date = new Date().toTimeString();
    this.display ? this.logs.push("Opened" + ' ' + date) : this.logs.push("Closed" + ' ' + date);
  }
}
