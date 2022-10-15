import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = [];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  
  ngOnChanges(){
    console.log(this.posts,"posts from component");
  }

  getPosts(){
    this.postsService.getPosts().subscribe((posts:Post[]) => {
      this.posts = posts;
    });
  }

  delete(post:Post){
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postsService.deletePost(post).subscribe(x => {
      console.log(x , "deleted post");
    });
  }
}
