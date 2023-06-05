import { SharedComponent } from './shared.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrollProgressBarComponent } from './components/scroll-progress-bar/scroll-progress-bar.component';

const routes: Routes = [
  { path:'', component:SharedComponent},
  { path:'scroll', component:ScrollProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
