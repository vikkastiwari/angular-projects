import { Component, EventEmitter, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  isDisabled: boolean = false;
  btnClick = new EventEmitter();

  onSubmit($event:Event){
    console.log('submit',$event);
  }
}
