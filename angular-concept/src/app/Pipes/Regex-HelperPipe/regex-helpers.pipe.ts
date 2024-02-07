import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regexHelpers'
})
export class RegexHelpersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
