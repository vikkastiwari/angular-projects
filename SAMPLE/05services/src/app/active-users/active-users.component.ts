import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.users = this.service.activeUsers;
  }

  onSetToInactive(id: number) {
    this.service.onSetToInactive(id);
  }
}
