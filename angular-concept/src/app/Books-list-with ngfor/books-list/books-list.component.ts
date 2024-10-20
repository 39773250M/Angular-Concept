import { Component } from '@angular/core';
import {ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import {BookCrudService} from "./../../Service/BookCrudService/book-crud.service";
import {BookComponent} from "./../book/book.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit, OnDestroy {

  private readonly destroyed = new Subject<boolean>();
  books: BookComponent[] = [];

  constructor(private crud: BookCrudService,
    private changeDetectorRef: ChangeDetectorRef) {
}

ngOnInit(): void {
  this.crud.books
      .pipe(takeUntil(this.destroyed))
      .subscribe(books => {
          console.log('BooksListComponent list changed', books.length);
          this.books = books;
          this.changeDetectorRef.detectChanges();
      });
}

ngOnDestroy(): void {
  this.destroyed.next(true);
  this.destroyed.complete();
}

}
