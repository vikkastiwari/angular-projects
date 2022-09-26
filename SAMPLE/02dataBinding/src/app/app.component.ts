import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  log(event:Event){
    this.title = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.title = '';
  }
}
