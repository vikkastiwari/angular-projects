import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './component/posts/posts.component';
import { PostDetailComponent } from 'src/app/component/posts/post-detail/post-detail.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'details/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
