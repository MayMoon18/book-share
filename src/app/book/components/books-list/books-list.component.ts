import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Model
import { IBooksList } from '../../models/books';

// Services
import { BooksManagerServiceService } from '../../services/books-manager-service.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookList: Array<IBooksList> = [];

  constructor(private booksManagerServiceService: BooksManagerServiceService) {}

  ngOnInit(): void {
    this.bookList = this.booksManagerServiceService.getBookList();
    // this.addNewBookTest();

    this.booksManagerServiceService.bookList.subscribe(books => console.log(books));
    this.observables();
    this.operators();
  }

  // addNewBookTest() {
  //   this.booksManagerServiceService.addNewBook({
  //       name: 'Brújula 3',
  //       author: 'Diana Uribe',
  //       imageUrl: 'https://images.squarespace-cdn.com/content/v1/5bc003a17eb88c211953c7db/1544549468988-9Z9N3NBY7ALDWWGG1Y5F/ke17ZwdGBToddI8pDm48kIIECwOv_Rl5uoyoJfMbheh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oUUR7O7e563XGapvOF5StlVUygo3wAqMtNkeUqhF1S1Z/IMG-20181129-WA0006.jpg',
  //       description: 'Descripción'
  //   });
  // }

  // tslint:disable-next-line: typedef
  observables() {
    // Observable basic -Devuelve los tres
    const observable = new Observable((subscriber) => {
      subscriber.next(100);
      subscriber.next(200);
      subscriber.next(300);
    });

    observable.subscribe((obs) => console.log(obs));

    // Behavior subject - Devuelve solo el último
    const beSubject = new BehaviorSubject(0);
    beSubject.next(1);
    beSubject.next(2);

    beSubject.subscribe((value) => console.log('A:', value));
    beSubject.next(3);

    beSubject.subscribe((value) => console.log('B:', value));
  }

  operators() {
    const numbers = from([12, 13, 14]);

    console.log(numbers);

    numbers.subscribe(num => console.log(num));

    // Map
    numbers
      .pipe(map(num => num * num))
      .subscribe(n => console.log(n));

    // Filter
    numbers
      .pipe(filter(num => num === 14))
      .subscribe(n => console.log(n));
  }
}
