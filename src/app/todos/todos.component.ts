import {Component, OnInit} from '@angular/core';
import {RetrieveTodosService} from '../service/data/retrieve-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(private service: RetrieveTodosService) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.getAllTodos('pesho').subscribe(
      response => {
        this.todos = response;
        console.log(this.todos);
      }
    );
  }


  deleteTodoService(id: number) {
    this.service.deleteTodo('pesho', id).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted todo with id: ${id}`;
        this.refreshTodos();
      }
    );
  }

}


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isAchieved: boolean
  ) {
  }
}
