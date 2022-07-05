import { Board } from "./board-model";

export class TaskList {
    constructor(
      public id: number,
      public board: Board,
      public name: string
    ) { }
  }