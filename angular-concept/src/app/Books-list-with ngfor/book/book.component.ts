import { Component, Input } from '@angular/core';
import { BookCrudService } from '../../Service/BookCrudService/book-crud.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(
    
    public bookcrudservice: BookCrudService) {
}


@Input() book!: BookComponent;


ngOnInit(): void {
    console.log('BookComponent ngOnInit', this.book);
}
}
