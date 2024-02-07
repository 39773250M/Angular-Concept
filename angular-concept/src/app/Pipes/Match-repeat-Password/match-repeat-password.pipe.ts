import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchRepeatPassword'
})
export class MatchRepeatPasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
