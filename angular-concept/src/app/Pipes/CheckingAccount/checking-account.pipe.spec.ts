import { CheckingAccountPipe } from './checking-account.pipe';

describe('CheckingAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckingAccountPipe();
    expect(pipe).toBeTruthy();
  });
});
