import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskList } from '../models/taskList-model';

@Injectable({
  providedIn: 'root'
})
export class TaskListDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTaskListsOnSpecificBoard(boardId: number) {
    return this.http.get<TaskList[]>(`http://localhost:8080/home/${boardId}/taskLists`);
  }

  createTaskList(boardId: number,name:string,) {
    return this.http.post(`http://localhost:8080/home/${boardId}/addTaskList`,name);
  }
}
