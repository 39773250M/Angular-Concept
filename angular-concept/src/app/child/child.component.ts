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

   @Output() addItemEvent = new EventEmitter<string>();
   
   @Output() removeItemEvent = new EventEmitter<string>();
  
  // @ViewChild()

  addItem() {
    this.addItemEvent.emit('🐢');

  }

  removeItem() {
    this.removeItemEvent.emit('🐢');
  }
}
