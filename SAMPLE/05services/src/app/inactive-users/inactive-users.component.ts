import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.users = this.service.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.service.onSetToActive(id);
  }
}
