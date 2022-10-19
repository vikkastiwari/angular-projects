import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postsService.getPost(+id).subscribe((post) => (this.post = post));
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.postsService.updatePost(this.post).subscribe(() => this.goBack());
  }
}
