import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BookComponent} from "./../../Books-list-with ngfor/book/book.component";
import {BookBuilderComponent} from "./../../Books-list-with ngfor/book-builder/book-builder.component";

@Injectable({
  providedIn: 'root'
})
export class BookCrudService {
  public readonly books = new BehaviorSubject<BookComponent[]>([]);
  constructor() { }

  public load(length: number): void {
    this.books.next(Array.from({length}).map((value, index) => new BookBuilderComponent().title(`Title ${index}`).author(`Author ${index}`).build()));
}

public create(book: BookComponent): void {
    const books = this.booksClone;
    books.unshift(book);
    this.books.next(books);
}

public delete(book: BookComponent): void {
    const books = this.booksClone;
    this.books.next(books.filter(current => current.id !== book.id));
}

private get booksClone(): BookComponent[] {
    return this.books.value.map(book => new BookBuilderComponent().from(book).build());
}
}
