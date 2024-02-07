import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkingAccount'
})
export class CheckingAccountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
