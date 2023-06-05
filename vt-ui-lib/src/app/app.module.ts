import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AnimationsModule } from './core/modules/animations/animations.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/modules/footer/footer.module';
import { HeaderModule } from './core/modules/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    FooterModule,
    BrowserAnimationsModule,
    AnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
