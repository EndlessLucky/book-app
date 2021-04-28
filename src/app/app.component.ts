import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { retrievedBookList, addBook, removeBook } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  onAdd(bookId: any): void {
    this.store.dispatch(addBook({ bookId }));
  }
  onRemove(bookId: any): void {
    this.store.dispatch(removeBook({ bookId }));
  }
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.booksService
      .getBooks()
      // tslint:disable-next-line: deprecation
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
