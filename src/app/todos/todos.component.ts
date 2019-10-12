import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Java Expert', new Date(), false),
    new Todo(2, 'Angular Expert', new Date(), false)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isAchieved: boolean
  ) {}
}
