import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../moch.tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = 'http://localhost:8085/api/task';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiUrl)

    /*const tasks = of(TASKS);
    return tasks;*/
  }

  deleteTask(id: number): Observable<number> {
    console.log('Deleting item ' + id);
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
  }
}
