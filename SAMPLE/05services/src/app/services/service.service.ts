import { Injectable } from '@angular/core';
import { CounterServiceService } from './counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterServiceService){}

  onSetToInactive(id:number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.incActiveToInactive();
  }
  
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incInactiveToActive();
  }
}
