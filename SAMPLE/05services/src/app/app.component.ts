import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from './services/counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeToInactiveCount:number = 0;
  inactivetoActiveCount:number = 0;

  constructor(private countService:CounterServiceService){ }

  ngOnInit(): void {
    console.log(this.countService.activeToInactiveCount,"this.countService.activeToInactiveCount");
    console.log(this.countService.inactivetoActiveCount,"this.countService.inactivetoActiveCount");
    
    this.countService.activeToInactiveEvent.subscribe(count => {
      this.activeToInactiveCount = count;
    });

    this.countService.inactivetoActiveEvent.subscribe(count =>{
      this.inactivetoActiveCount = count;
    });
  }

}
