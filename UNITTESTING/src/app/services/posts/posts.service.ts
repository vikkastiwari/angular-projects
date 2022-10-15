import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  deletePost(post:Post){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
