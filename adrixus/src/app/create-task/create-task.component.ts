import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  // define Book type for strict type
  myBooks: Book[];

  // use @Output() decorator and EventEmitter() for send data to main task component
  @Output() sendbooksemit = new EventEmitter();

  //create manually data for task
  private books: Book[] = [
    { id: 101, name: 'Angular 13', price: 4500, description: 'Angular book ' },
    { id: 102, name: 'React ', price: 2400, description: 'React book ' },
    {
      id: 103,
      name: 'Java Script',
      price: 3500,
      description: 'java Sript book ',
    },
    { id: 104, name: 'Node Js ', price: 8000, description: 'Node js book ' },
    { id: 106, name: 'Java ', price: 6000, description: 'Java book ' },
    { id: 107, name: 'AWS ', price: 6800, description: 'Aws book ' },
    { id: 108, name: 'UI', price: 9000, description: 'UI developer book ' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.rcvBooks();
    this.sendbooksemit.emit(this.myBooks);
  }

  //  convert our normal data to observable with the helf of  'of' operator
  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  // subscribe data and and store data in myBooks variables
  rcvBooks() {
    return this.getBooks().subscribe((res) => (this.myBooks = res));
  }
}
