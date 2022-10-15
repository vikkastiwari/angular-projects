import { first } from 'rxjs';

import { Post } from 'src/app/models/Posts';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  it('should raise an event when the delete post is clicked', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, body: 'body 1', title: 'dummy' };
    comp.post = post;
    comp.onDeletePost(new MouseEvent('click'));
    comp.delete.pipe(first()).subscribe((selectedPost:any) => {
      expect(selectedPost).toEqual(post);
      expect(comp.delete).toHaveBeenCalled();
    });
  });
});
