import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDrawer = false;
  drawerTitle = 'Drawer Title';
  drawerDescription = 'Drawer description goes here.';

  openDrawer() {
    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
  }
}
