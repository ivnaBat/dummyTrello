import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { BoardDataService } from '../service/board-data.service';
import { Board } from '../models/board-model';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name = '';
  boardId = 0;

  boards : Board[] = []
  board = new Board(0,'');

  constructor(private router: Router,
    public dialog: MatDialog,
    public boardService: BoardDataService
   ) { }

  ngOnInit(): void {
    this.refreshBoards();
   
  }

  refreshBoards(){
    this.boardService.retrieveAllBoards().subscribe(
      response => {
        response.forEach(element => {
          console.log(element);  
          this.boards.push(new Board(element.id, element.boardName)); 
        });
        
      }
    )
  }

  public navigateToSpecificBoard(id : number) {
    this.router.navigate(['home', id]);   
  }

  openDialog(message:string) {
    console.log('ok je');
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {data: {dialogText: message}});

    dialogRef.afterClosed().subscribe( result  => {
      console.log(result);
      this.boardService.createBoard(result).subscribe(data=>{
        console.log(data);
        var pdata = JSON.stringify(data);
        this.boards.push(new Board(JSON.parse(pdata).id,result));

      })
      
    })
    
  }
}
