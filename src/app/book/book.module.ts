import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { BooksListComponent } from './components/books-list/books-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';

@NgModule({
  declarations: [BooksListComponent, BookCreateComponent],
  exports: [BooksListComponent],
  imports: [CommonModule, SharedModule, FormsModule]
})
export class BookModule {}
