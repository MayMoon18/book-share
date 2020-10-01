import { Component, OnInit } from '@angular/core';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';
import { Router } from '@angular/router';
import { IBooksList } from '../../models/books';

@Component({
  selector: 'app-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  name: string;
  author: string;
  imageUrl: string;
  description: string;

  constructor(
    private booksManagerServiceService: BooksManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // addNewBook() {
  //   this.booksManagerServiceService.addNewBook({
  //       name: this.name,
  //       author: 'Diana Uribe',
  //       imageUrl: 'https://images.squarespace-cdn.com/content/v1/5bc003a17eb88c211953c7db/1544549468988-9Z9N3NBY7ALDWWGG1Y5F/ke17ZwdGBToddI8pDm48kIIECwOv_Rl5uoyoJfMbheh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oUUR7O7e563XGapvOF5StlVUygo3wAqMtNkeUqhF1S1Z/IMG-20181129-WA0006.jpg',
  //       description: 'Descripción'
  //   });

  //   this.router.navigate(['/']);
  // }

  onSubmit() {
    const newBook: IBooksList = {
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      description: this.description,
    };

    this.booksManagerServiceService.addNewBook(newBook);
    this.router.navigate(['']);
  }
}
