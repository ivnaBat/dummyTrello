import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTasksInSingleList(taskListId: number) {
    return this.http.get<Task[]>(`http://localhost:8080/home/${taskListId}/tasks`);
  }

  createTask(taskListId: number, description:string,) {
    return this.http.post(`http://localhost:8080/home/${taskListId}/addTask`,description);
  }

}
