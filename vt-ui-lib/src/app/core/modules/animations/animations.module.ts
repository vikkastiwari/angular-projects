import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HrefComponent } from './components/href/href.component';
import { CustomRouterLinkDirective } from './components/href/custom-router-link.directive';

@NgModule({
  declarations: [
    AnimationsComponent,
    ButtonComponent,
    CardComponent,
    HrefComponent,
    CustomRouterLinkDirective
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
  ]
})
export class AnimationsModule { }
