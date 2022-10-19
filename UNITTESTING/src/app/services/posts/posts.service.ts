import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) { }

  getPosts(){
    console.log('getPosts hitted');
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(postId: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  };

  updatePost(post: Post) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/post/${post.id}`,
      post
    );
  }

  deletePost(post:Post){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
