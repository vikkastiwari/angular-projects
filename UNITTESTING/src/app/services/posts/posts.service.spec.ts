import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';

describe('Post Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let postService: PostsService;
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
    // spy object for http client
    // also we can define it globally to utilize it - just another way
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','delete']);

    // Testbed config
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });

    // getting instances
    postService = TestBed.inject(PostsService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  
    // postService = new PostsService(httpClientSpy);
  });

  describe('getPosts()', () => {
    it('should return expected posts when getposts is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(POSTS));
      postService.getPosts().subscribe({
        next: (posts) => {
          expect(posts).toEqual(POSTS);
          // it tells that request is resolved
          done();
        },
        error: (error) => {
          console.log(error.message());
          done.fail; // fails the spec and indicates that it has completed
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});