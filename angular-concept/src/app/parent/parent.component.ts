import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {


items = new Array();

  addItem(item: number) {
    console.log("called" + item)
    this.items.push(item);
  }

  removeItem(item: number) {
    console.log("called" + item)
    this.items.pop();
  }
}
