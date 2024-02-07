import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  // @Output() addItemEvent = new EventEmitter<string>();
  
  // @ViewChild()

  // addItem() {
  //   this.addItemEvent.emit('🐢');
  // }
}
