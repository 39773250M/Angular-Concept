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

  addItem(item: any) {
    console.log("parent called add item" + item)
    this.items.push(item);
  }

  removeItem(item: number) {
    console.log("parent called remove item" + item)
    this.items.pop();
  }
}
