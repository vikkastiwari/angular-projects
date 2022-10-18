import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from 'src/app/services/posts/posts.service';

describe('postService (HttpClientTestingModule)', () => {
    let postService: PostsService;
    let httpTestingController: HttpTestingController;
    let POSTS = [
        {
            id: 1,
            body: 'body 1',
            title: 'title 1',
        },
        {
            id: 2,
            body: 'body 2',
            title: 'title 2',
        },
        {
            id: 3,
            body: 'body 3',
            title: 'title 3',
        },
    ];
    beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [PostsService],
        imports: [HttpClientTestingModule],
    });

    postService = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('getPosts()', () => {
        it('should return posts when getPosts() is called', (done: DoneFn) => {
            postService.getPosts().subscribe((data) => {
                expect(data).toEqual(POSTS);
                done();
            });
            const request = httpTestingController.expectOne(
                'https://jsonplaceholder.typicode.com/posts'
            );
            request.flush(POSTS);
            expect(request.request.method).toBe('GET');
        });
    });

    describe('getPost()', () => {
        it('should return single post when getpost is called with postId', () => {
          postService.getPost(1).subscribe();
        //   postService.deletePost(POSTS[2]).subscribe();
    
          const request = httpTestingController.expectOne(
            `https://jsonplaceholder.typicode.com/posts/1`
          );
    
          expect(request.request.method).toBe('GET');
        });
    });

    afterEach(() => {
        // keeps check that other than required calls, no calls should be made
        httpTestingController.verify();
    });
});