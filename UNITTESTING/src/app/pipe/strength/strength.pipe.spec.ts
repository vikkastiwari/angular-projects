import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe:StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display weak if value is less than 10', () => {
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if value is 10 or greater and less than 20', () => {
    expect(pipe.transform(10)).toEqual('10 (strong)');
    expect(pipe.transform(15)).toEqual('15 (strong)');
  });

  it('should display strongest if value is greater than or equal to 20', () => {
    expect(pipe.transform(20)).toEqual('20 (strongest)');
  })
});
