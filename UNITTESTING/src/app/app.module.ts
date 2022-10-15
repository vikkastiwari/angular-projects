import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './pipe/strength/strength.pipe';
import { DemoComponent } from './component/demo/demo.component';
import { ModifierComponent } from './component/modifier/modifier.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/posts/post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    DemoComponent,
    ModifierComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
