import { TestBed } from '@angular/core/testing';

import { LoggerService } from './../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;
  let mockLoggerService:jasmine.SpyObj<LoggerService>;

  // gets called before each 'it'
  beforeEach(() => {
    // mocking the instantiation of the service
    // mockLoggerService = jasmine.createSpyObj('LoggerService',['log']);
    
    // it doesn't mocks and actually instantiates the service 
    // const loggerService = new LoggerService;

    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: mockLoggerService,
        },
      ],
    });
    calculatorService = TestBed.inject(CalculatorService);
    mockLoggerService = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
    // calcService = new CalculatorService(mockLoggerService);
  });

  it('should add numbers', () => {
    // restricts calling to actuall function instead it kind of mock it
    // spyOn(mockLoggerService, 'log');

    let result = calculatorService.add(2,3);
    console.log(result,"res");
    expect(result).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
    // expect(loggerService.log).toHaveBeenCalled;
  });


  it('should subtract numbers', () => {
    let result = calculatorService.subtract(2,3);
    expect(result).toBe(-1);
    
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});

// alternative to before each - we can utilize function way also

// import { TestBed } from '@angular/core/testing';
// import { LoggerService } from 'src/app/services/logger/logger.service';
// import { CalculatorService } from './calculator.service';

// function setUp() {
//   const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
//   TestBed.configureTestingModule({
//     providers: [
//       CalculatorService,
//       {
//         provide: LoggerService,
//         useValue: mockLoggerService,
//       },
//     ],
//   });
//   const calculator = TestBed.inject(CalculatorService);
//   const loggerServiceSpy = TestBed.inject(
//     LoggerService
//   ) as jasmine.SpyObj<LoggerService>;
//   return { calculator, loggerServiceSpy };
// }
// describe('CalculatorService', () => {
//   it('should add two numbers', () => {
//     const { calculator, loggerServiceSpy } = setUp();

//     console.log('calling add');
//     let result = calculator.add(2, 2);
//     expect(result).toBe(4);
//     expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
//   });

//   it('should subtract two numbers', () => {
//     const { calculator, loggerServiceSpy } = setUp();
//     console.log('calling subtract');
//     let result = calculator.subtract(2, 2);
//     expect(result).toBe(0);
//     expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
//   });
// });