import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  activeToInactiveCount:number = 0;
  inactivetoActiveCount:number = 0;

  activeToInactiveEvent = new EventEmitter<number>();
  inactivetoActiveEvent = new EventEmitter<number>();

  constructor() { }

  incActiveToInactive(){
    this.activeToInactiveCount++;
    console.log(this.activeToInactiveCount,"activeToInactiveCount");
    this.activeToInactiveEvent.emit(this.activeToInactiveCount);
  }

  incInactiveToActive(){
    this.inactivetoActiveCount++;
    console.log(this.inactivetoActiveCount,"inactivetoActiveCount");
    this.inactivetoActiveEvent.emit(this.inactivetoActiveCount);    
  }
}
