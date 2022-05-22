import { Injectable } from '@angular/core';
import { Book } from './book';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private books:Book[]=[
    {id:101, name: 'Angular 13', price: 4500, description:'Angular book '},
    {id:102, name: 'React ', price: 2400, description:'React book '},
    {id:103, name: 'Java Script', price: 3500, description:'java Sript book '},
    {id:104, name: 'Node Js ', price: 8000, description:'Node js book '},
    {id:106, name: 'Java ', price: 6000, description:'Java book '},
    {id:107, name: 'AWS ', price: 6800, description:'Aws book '},
    {id:108, name: 'UI', price: 9000, description:'UI developer book '},
    
  ]
  
  constructor() { }


  getBooks():Observable<Book[]>{

    return of (this.books)
  }
  
  getDataById(id:number):Observable<Book>{

    return this.getBooks().map(books=>books.find(book=>book.id==id))
  }

}
