import { MatchRepeatPasswordPipe } from './match-repeat-password.pipe';

describe('MatchRepeatPasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new MatchRepeatPasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
