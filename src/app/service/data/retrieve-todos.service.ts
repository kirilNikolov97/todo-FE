import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from 'src/app/todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class RetrieveTodosService {

  constructor(private http: HttpClient) {
  }

  getAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

}
