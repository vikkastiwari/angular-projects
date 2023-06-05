import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SharedComponent } from './shared.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollProgressBarComponent } from './components/scroll-progress-bar/scroll-progress-bar.component';


@NgModule({
  declarations: [
    SharedComponent,
    ModalComponent,
    DrawerComponent,
    NavBarComponent,
    TodoTableComponent,
    CarouselComponent,
    ScrollProgressBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ModalComponent,
    DrawerComponent,
    NavBarComponent,
    TodoTableComponent,
    CarouselComponent,
    ScrollProgressBarComponent
  ]
})
export class SharedModule { }
