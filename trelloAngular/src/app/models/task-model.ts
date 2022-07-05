import { TaskList } from "./taskList-model";

export class Task {
    constructor(
      public id: number,
      public taskList: TaskList,
      public description: string
    ) { }
  }