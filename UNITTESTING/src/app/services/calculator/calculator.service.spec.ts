import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calcService: CalculatorService;
  let mockLoggerService!:any;

  // gets called before each 'it'
  beforeEach(() => {
    // mocking the instantiation of the service
    mockLoggerService = jasmine.createSpyObj('LoggerService',['log']);
    
    // it doesn't mocks and actually instantiates the service 
    // const loggerService = new LoggerService;

    calcService = new CalculatorService(mockLoggerService);
  });

  it('should add numbers', () => {
    // restricts calling to actuall function instead it kind of mock it
    // spyOn(mockLoggerService, 'log');

    let result = calcService.add(2,3);
    expect(result).toBe(5);
    
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
    // expect(loggerService.log).toHaveBeenCalled;
  });


  it('should subtract numbers', () => {
    let result = calcService.subtract(2,3);
    expect(result).toBe(-1);
    
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
