import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocatorComponent } from './components/locator/locator.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { LocationService } from './service/location.service';

@NgModule({
  declarations: [
    AppComponent,
    LocatorComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
