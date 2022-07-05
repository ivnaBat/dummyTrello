import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../models/board-model';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllBoards() {
    return this.http.get<Board[]>(`http://localhost:8080/home/boards`);
    //console.log("Execule HW Bean Service");
  }

  retrieveBoard(name:string) {
    return this.http.get<Board>(`http://localhost:8080/home/${name}`);
  }

  createBoard(name:string) {
    return this.http.post(`http://localhost:8080/home/addBoard`,name);
  }



}
