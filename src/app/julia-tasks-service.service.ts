import { Injectable } from '@angular/core';

@Injectable()
export class JuliaTasksServiceService {
  list = [];
  constructor() {}

  getTasks() {
    return this.list;
  }

  getTasksTotal() {
    return this.list.length;
  }

  setTasks(item: string) {
    this.list.push(item);
  }
}
