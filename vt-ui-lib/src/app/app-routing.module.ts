import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent } from './core/modules/animations/animations.component';
import { SharedComponent } from './core/modules/shared/shared.component';

const routes: Routes = [
  { path:"animation", component:AnimationsComponent },
  {
    path: 'shared',
		loadChildren: () =>
			import('./core/modules/shared/shared.module').then(
				(m) => m.SharedModule
		),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
