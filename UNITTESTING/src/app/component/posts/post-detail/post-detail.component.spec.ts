import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Post } from './../../../models/Posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostDetailComponent } from './post-detail.component';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockPostService:jasmine.SpyObj<PostsService>;

  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '2';
          },
        },
      },
    };

    mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostsService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the post title', () => {
    mockPostService.getPost.and.returnValue(of({id:2,title:'t1',body:'b1'} as Post));
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement;
    console.log(element,'element');
    expect(element.textContent).toBe(fixture.componentInstance.post.title);
  });
});
