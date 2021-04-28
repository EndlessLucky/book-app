import { BookListComponent } from './book-list/book-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
