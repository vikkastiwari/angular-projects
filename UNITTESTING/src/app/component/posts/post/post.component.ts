import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  @Input() post!: Post;
  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onDeletePost(event: Event) {
    // The stopPropagation() method allows you to prevent propagation of the current event.
    // It prevents propagation of current event to its parent, it stays there
    event.stopPropagation(); 
    // event.preventDefault(); 
    this.delete.emit();
  }
}
