import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  let count:number;

  /*
    Three A Rule
    A - Arrange
    A - Act
    A - Assert
  */

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // arrange
    service = TestBed.inject(LoggerService);
    // act
    count = service.messages.length;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messages in start', () => {
    // assert
    expect(count).toBe(0);
  });

  it('should clear the testing logs if clear is called',() => {
    // act 
    let service = new LoggerService;
    service.log('testing log 1');
    service.log('testing log 2');

    service.clear();

    // assert 
    expect(count).toBe(0);
  });
});
