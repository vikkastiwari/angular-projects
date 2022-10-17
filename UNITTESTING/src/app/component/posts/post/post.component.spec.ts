import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

import { Post } from 'src/app/models/Posts';
import { PostComponent } from './post.component';

describe('PostComponent', () => {

  let fixture: ComponentFixture<PostComponent>;
  let comp: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });

    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  });

  it('should create post component using TestBed', () => {
    expect(comp).toBeDefined();
  });

  it('should render the post title in the anchor element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'title 1' };
    comp.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });

  it('should render the post title in the anchor element using debug element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'title 1' };
    comp.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement: HTMLElement = postDebugElement.query(
      By.css('a')
    ).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    // now we are utilizing the testbed. so, no need to create instance using new keyword
    // const comp = new PostComponent();

    const post: Post = { id: 1, body: 'body 1', title: 'dummy' };
    comp.post = post;
    comp.onDeletePost(new MouseEvent('click'));
    comp.delete.pipe(first()).subscribe((selectedPost:any) => {
      expect(selectedPost).toEqual(post);
      expect(comp.delete).toHaveBeenCalled();
    });
  });
});
