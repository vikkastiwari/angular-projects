import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub!: Subscription;
  isAuthenticated:boolean = false;

  constructor(private dataStorageService: DataStorageService, private authService:AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe({next: user => {
      this.isAuthenticated = !!user; // !user?false:true
    }});
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
