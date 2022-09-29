import { Subject } from 'rxjs';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  @Input() message:string = '';
  @Output() close = new Subject<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.next(true);
  }
}
