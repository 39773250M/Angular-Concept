import { Component, EventEmitter, Input, Output, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() name = 'santhosh';
  

  @Input() occupation = 'Software engineer';

  //  @Output() xyz = new EventEmitter<number>();
   
  //  @Output() removeItemEvent = new EventEmitter<number>();
  
  // @ViewChild()

  // addItem() {
  //   this.xyz.emit(100);

  // }

  // removeItem() {
  //   this.removeItemEvent.emit(100);
  // }
}
