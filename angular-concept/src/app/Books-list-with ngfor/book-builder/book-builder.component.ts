import { Component } from '@angular/core';
import {BookComponent} from "../book/book.component";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-book-builder',
  standalone: true,
  imports: [],
  templateUrl: './book-builder.component.html',
  styleUrl: './book-builder.component.scss'
})
export class BookBuilderComponent {

  private idValue = uuid();
  private titleValue = 'title';
  private authorValue = 'author';

  public id(value: string): BookBuilderComponent {
    this.idValue = value;
    return this;
  }

  public title(value: string): BookBuilderComponent {
    this.titleValue = value;
    return this;
  }

  public author(value: string): BookBuilderComponent {
    this.authorValue = value;
    return this;
  }

  from(book: BookComponent): BookBuilderComponent {
    return new BookBuilderComponent()
      .id(book.id)
      .title(book.title)
      .author(book.author);
  }

  build(): BookComponent {
    return new BookComponent(
      this.idValue,
      this.titleValue,
      this.authorValue
    );
  }
}
