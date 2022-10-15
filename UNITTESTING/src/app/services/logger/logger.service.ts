import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  messages:string[] = [
    'Dummy log 1',
    'Dummy log 2',
  ];

  constructor() { 
    // debugger;
  }

  log(message:string){
    // debugger;
    this.messages.push(message);
    // console.log(this.messages);
  }

  clear(){
    this.messages = [];
  }
}
