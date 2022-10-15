import { Component, OnInit } from '@angular/core';

import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
  // providers:[LoggerService]
})
export class ModifierComponent implements OnInit {

  logs:string[] = [];

  constructor(private loggerService:LoggerService) { }

  ngOnInit(): void {
    this.logs = this.loggerService.messages;
  }

  addLog(){
    this.loggerService.log('I am from modifier component');
  }

}
