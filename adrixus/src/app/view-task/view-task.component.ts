import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent implements OnInit {
  bookdetails: Book;

  // inject ActivatedRoute for receiving id from url;
  // inject Dataservice for data view basis id ;
  constructor(
    private _dataservice: DataserviceService,
    private _route: ActivatedRoute
  ) {}

  // recieve url id with the help of using router observable
  ngOnInit(): void {
    this._route.params.subscribe((res) => {
      this._dataservice
        .getDataById(res['id'])
        .subscribe((val) => (this.bookdetails = val));
    });
  }
}
