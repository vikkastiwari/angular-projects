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
  })
});
