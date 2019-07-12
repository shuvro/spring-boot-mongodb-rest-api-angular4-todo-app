import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from './base.service';

@Injectable()
export class TodoService extends BaseService {
  // private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) {
    super();
  }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.apiUrl + '/todos/')
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }

  createTodo(todoData: Todo): Promise<Todo> {
    return this.http.post(this.apiUrl + '/todos/', todoData)
      .toPromise().then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  updateTodo(todoData: Todo): Promise<Todo> {
    return this.http.put(this.apiUrl + '/todos/' + todoData.id, todoData)
      .toPromise()
      .then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    return this.http.delete(this.apiUrl + '/todos/' + id)
      .toPromise()
      .catch(this.handleError);
  }
}
