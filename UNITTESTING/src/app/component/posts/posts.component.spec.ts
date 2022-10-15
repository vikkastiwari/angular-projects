import { of } from 'rxjs';

import { Post } from 'src/app/models/Posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let POSTS: Post[] = [];
  let mockPostService: jasmine.SpyObj<PostsService>;

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

    mockPostService = jasmine.createSpyObj(['getPosts','deletePost']);
    component = new PostsComponent(mockPostService);
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
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should delete selected post from list of posts', () => {
      for(let post of component.posts){
        expect(post).not.toBe(POSTS[1]);
      }
    });
  });
});
