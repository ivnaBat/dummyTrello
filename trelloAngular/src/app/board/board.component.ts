import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { TaskListDataService } from '../service/task-list-data.service';
import { TaskDataService } from '../service/task-data.service';
import { TaskList } from '../models/taskList-model';
import { Task } from '../models/task-model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardId: number = 0;
  taskLists: TaskList[] = [];
  tasks: Task[] = [];

  constructor(private router: Router,
    public taskListDataService: TaskListDataService,
    public taskDataService: TaskDataService,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    var url = this.router.url ?? "";
    var values = url.split("/");
    this.boardId = parseInt(values.pop() ?? "0", 10);
    this.refreshTaskLists();
  }

  refreshTaskLists() {
    this.taskListDataService.retrieveAllTaskListsOnSpecificBoard(this.boardId).subscribe(
      response => {
        response.forEach(element => {
          console.log(element);
          this.taskLists.push(element);
          this.refreshTasks(element.id);
        });
        console.log(this.taskLists)
      }
    );
  }

  openDialogForAddingList(message: string) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, { data: { dialogText: message } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.boardId);
      console.log(result);
      this.taskListDataService.createTaskList(this.boardId, result).subscribe(data => {
        console.log(data);
        var pdata = JSON.stringify(data);
        this.taskLists.push(new TaskList(JSON.parse(pdata).id, JSON.parse(pdata).board, result));

      })
    })
    console.log(this.taskLists);
  }

  refreshTasks(taskListId: number) {
    this.taskDataService.retrieveAllTasksInSingleList(taskListId).subscribe(
      response => {
        response.forEach(element => {
          console.log(element);
          this.tasks.push(element);
        });
        console.log(this.taskLists)
      }
    );
  }

  openDialogForAddingTask(message: string, taskListId: number) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, { data: { dialogText: message } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.taskDataService.createTask(taskListId, result).subscribe(data => {
        console.log(data);
        var pdata = JSON.stringify(data);
        this.tasks.push(new Task(JSON.parse(pdata).id, JSON.parse(pdata).taskList, result));

      })
    })
    console.log(this.tasks);
  }

}
