import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServersComponent } from './servers/servers.component';
import { RendererComponent } from './renderer/renderer.component';
import { HighlightDirective } from './renderer/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServersComponent,
    RendererComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
