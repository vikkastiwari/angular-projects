import { Component, Input } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Post } from 'src/app/models/Posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsComponent } from './posts.component';

// class MockPostService {
//   getPosts() {}

//   deletePost(post: Post):any {
//     return of(true);
//   }
// }

@Component({
  selector: 'app-post',
  template: '<div></div>',
})
class FakePostComponent {
  @Input() post!: Post;
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let POSTS: Post[] = [];
  let mockPostService: jasmine.SpyObj<PostsService>;
  // let mockPostService : any;
  let fixture:ComponentFixture<PostsComponent>;

  beforeEach(() => {

    POSTS = [
      {
        id:1,
        body:'body 1',
        title:'title 1'
      },
      {
        id:2,
        body:'body 2',
        title:'title 2'
      },
      {
        id:3,
        body:'body 3',
        title:'title 3'
      }
    ];

    // also rather than using the spyobj we can pass the dummy class service
    mockPostService = jasmine.createSpyObj(['getPosts','deletePost']);

    // rather than passing the instance like this we can utilize the testbed
    // component = new PostsComponent(mockPostService);

    // we can use testbed to inject the dependencies
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
      ],
      providers: [
        {
          provide: PostsService,
          useValue: mockPostService,
          // useClass: MockPostService,
        },
      ],
    });

    // component = TestBed.inject(PostsComponent);
    // mockPostService = TestBed.inject(PostsService);

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  
  it('should create one post child Element for each post ', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postsElement = debugElement.queryAll(By.css('.posts'));
    expect(postsElement.length).toBe(POSTS.length);
  });

  it('should create posts component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should set posts from the service directly', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    expect(component.posts.length).toBe(3);
  });

  describe('delete', () => {

    beforeEach(()=>{
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
      component.delete(POSTS[1]);
    });

    it('should delete the selected post from posts', () => {
      expect(component.posts.length).toBe(2);
    });

    it('should call delete from service only once', () => {
      // spyOn(mockPostService, 'deletePost').and.callThrough();
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should delete selected post from list of posts', () => {
      for(let post of component.posts){
        expect(post).not.toBe(POSTS[1]);
      }
    });
  });
});
