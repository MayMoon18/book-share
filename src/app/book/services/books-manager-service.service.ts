import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IBooksList } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksManagerServiceService {
  bookList = new BehaviorSubject<IBooksList[]>([]);

  constructor() {}

  getBookList() {
    return this.bookList.getValue();
  }

  addNewBook(newBook: IBooksList) {
    this.bookList.next([...this.bookList.getValue(), newBook]);
  }
}
