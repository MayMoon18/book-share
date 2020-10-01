import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksListComponent } from './book/components/books-list/books-list.component';
import { BookCreateComponent } from './book/components/book-create/book-create.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'create', component: BookCreateComponent },
  // { path: 'login', redirectTo: Authlogin },
  // { path: 'about', component: About },
  // { path: '*', component: Not found }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
