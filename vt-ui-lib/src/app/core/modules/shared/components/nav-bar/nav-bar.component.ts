import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
