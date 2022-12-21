import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.scss']
})
export class MouseEventsComponent implements OnInit {
  clickCounter = 0;
  dblCounter = 0;
  mouseoverCounter = 0;
  mouseenterCounter = 0;
  mouseleaveCounter = 0;
  mousedownCounter = 0;
  mouseupCounter = 0;
  dragoverCounter = 0;
  dragCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  counter(flag:string){
    switch (flag) {
      case 'click':
        this.clickCounter++;
        break;
      case 'dblclick':
        this.dblCounter++;
        break;
      case 'mouseover':
        this.mouseoverCounter++;
        break;
      case 'mouseenter':
        this.mouseenterCounter++;
        break;
      case 'mouseleave':
        this.mouseleaveCounter++;
        break;
      case 'mousedown':
        this.mousedownCounter++;
        break;
      case 'mouseup':
        this.mouseupCounter++;
        break;
      case 'dragover':
        this.dragoverCounter++;
        break;
      case 'drag':
        this.dragCounter++;
        break;
      default:
        break;
    }
  }
}
