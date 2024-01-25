import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeconcept',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,DecimalPipe,CurrencyPipe,DatePipe,JsonPipe],
  templateUrl: './pipeconcept.component.html',
  styleUrl: './pipeconcept.component.scss'
})
export class PipeconceptComponent {
  username = 'yOunGTECh';

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
