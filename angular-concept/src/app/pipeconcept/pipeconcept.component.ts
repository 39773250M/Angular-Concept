import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeconcept',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,DecimalPipe,CurrencyPipe,DatePipe,JsonPipe,TitleCasePipe],
  templateUrl: './pipeconcept.component.html',
  styleUrl: './pipeconcept.component.scss'
})
export class PipeconceptComponent {
  username = 'yOunGTECh sachin';

  num = 1034564.123445646;
  birthday = new Date(2023, 3, 2);
  cost = 1500;

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
