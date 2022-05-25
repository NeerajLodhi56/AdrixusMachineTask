import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

rcvFormData:any;

  constructor() { }

  ngOnInit(): void {
  }

  register(val:NgForm){
this.rcvFormData=val.value;
  }


}
