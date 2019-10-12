import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    {id : 1, firstName : 'Pesho', lastName : 'Gosho'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
