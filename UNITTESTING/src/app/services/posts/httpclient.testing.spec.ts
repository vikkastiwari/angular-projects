import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

let testUrl = '/data';
interface Data {
  name: string;
}

describe('Http Client Testing Module', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    it('should call the testurl with get Request', () => {
      const testData: Data = { name: 'hv' };
      httpClient.get<Data>(testUrl).subscribe((data) => {
        expect(data).toEqual(testData);
      });
      const request = httpTestingController.expectOne('/data');
      // flush sends the data in request body   
      request.flush(testData);
      expect(request.request.method).toBe('GET');
      expect(request.request.method).not.toBe('POST');
    });

    it('should call the multiple testurl with respective request', (done:DoneFn) => {
        const testData: Data[] = [{ name: 'hv' }, { name: 'ada'}, { name: 'sewer' }];
        
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
          expect(data).toEqual([]);
        });
        
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
            expect(data).toEqual([testData[0]]);
        });
        
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
            expect(data).toEqual(testData);
        });
        
        const requests = httpTestingController.match(testUrl);
        expect(requests.length).toEqual(testData.length);
        
        // flush sends the data in request body
        requests[0].flush([]);
        requests[1].flush([testData[0]]);
        requests[2].flush(testData);
        done();

        for(let i = 0; i<testData.length; i++){
            expect(requests[i].request.method).toBe('GET');
            expect(requests[i].request.method).not.toBe('POST');
        }
    });
});