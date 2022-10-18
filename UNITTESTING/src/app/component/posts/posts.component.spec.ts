import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Post } from 'src/app/models/Posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

// class MockPostService {
//   getPosts() {}

//   deletePost(post: Post):any {
//     return of(true);
//   }
// }

// @Component({
//   selector: 'app-post',
//   template: '<div></div>',
// })
// class FakePostComponent {
//   @Input() post!: Post;
// }

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
        PostComponent
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

  it('should check whether exact post is sending to PostComponent', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    // we get the instance of all the child components
    const postComponentDEs = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );

    for (let i = 0; i < postComponentDEs.length; i++) {
      let postComponentInstance = postComponentDEs[i]
        .componentInstance as PostComponent;
      expect(postComponentInstance.post.title).toEqual(POSTS[i].title);
    }
  });

  // achieved using directive
  it('should create exact same number of Post Component with Posts', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    //ngOnInit() is called for parent and for all child components present init.
    fixture.detectChanges();
    // <app-child></app-child> - it is treated as a directive only
    const postComponentDEs = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );

    expect(postComponentDEs.length).toEqual(POSTS.length);
  });

  
  // achieved using css
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
    });

    it('should delete the selected post from posts', () => {
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('should call delete from service only once', () => {
      component.delete(POSTS[1]);
      // spyOn(mockPostService, 'deletePost').and.callThrough();
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should delete selected post from list of posts', () => {
      component.delete(POSTS[1]);
      for(let post of component.posts){
        expect(post).not.toBe(POSTS[1]);
      }
    });

    it('should call delete method when post component button is clicked', () => {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();

      // we are storing all the instances of postComponent
      let postComponentDEs = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );
      
      for (let i = 0; i < postComponentDEs.length; i++) {
        postComponentDEs[i]
          .query(By.css('button'))
          .triggerEventHandler('click', { stopPropagation: () => {} });
        expect(component.delete).toHaveBeenCalledWith(POSTS[i]);
      }
    });
    
    it('should call the delete method when the delete event is emitted in Post Component', () => {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();

      let postComponentDEs = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );

      for (let i = 0; i < postComponentDEs.length; i++) {
        (postComponentDEs[i].componentInstance as PostComponent).delete.emit();
        expect(component.delete).toHaveBeenCalledWith(POSTS[i]);
      }
    });
  });
});

