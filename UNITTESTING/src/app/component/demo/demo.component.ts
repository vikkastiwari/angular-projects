import { Component, OnInit } from '@angular/core';

import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  // providers:[LoggerService]
})
export class DemoComponent implements OnInit {

  logs:string[] = [];

  constructor(private loggerService:LoggerService) { }

  ngOnInit(): void {
    this.logs = this.loggerService.messages;
  }
  
}
