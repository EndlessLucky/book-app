import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: any }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: any }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book: any }>()
);
