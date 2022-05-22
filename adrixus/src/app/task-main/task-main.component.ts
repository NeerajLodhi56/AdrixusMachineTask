import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import 'rxjs-compat/add/operator/map';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.css']
})
export class TaskMainComponent implements OnInit {

rcvBooksFrom:Book[];

  constructor(private _route:ActivatedRoute ) { };

  ngOnInit(): void {
    //save data in local Storage Data coming from create task component
    localStorage.setItem("saveBooks", JSON.stringify(this.rcvBooksFrom));
  };

  getDataFrom(val:Book[]){
this.rcvBooksFrom=val;
  };




 
 
}


