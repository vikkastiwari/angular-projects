import { PostComponent } from './component/posts/post/post.component';
import { PostsComponent } from './component/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'posts', 
    component:PostsComponent,
    children:[
      {path:':id', component:PostComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
