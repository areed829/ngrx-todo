import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  incompleteTasks: string[] = ['First task'];
  completedTasks: string[] = [];

  constructor() {}

  ngOnInit() {}

  addTask(todoInput: HTMLInputElement) {
    this.addToIncomplete(todoInput.value);
    todoInput.value = '';
  }

  completeTask(task: string) {
    this.removeFromTodo(task);
    this.addToCompleted(task);
  }

  deletedFromTodo(task: string) {
    this.removeFromTodo(task);
  }

  deleteFromCompleted(task: string) {
    this.removeFromCompleted(task);
  }

  markAsIncompleted(task: string) {
    this.removeFromCompleted(task);
    this.addToIncomplete(task);
  }

  private addToIncomplete(task: string) {
    this.incompleteTasks = [...this.incompleteTasks, task];
  }

  private addToCompleted(task: string) {
    this.completedTasks = [...this.completedTasks, task];
  }

  private removeFromTodo(task: string) {
    this.incompleteTasks = this.incompleteTasks.filter(
      (currentTask) => currentTask !== task
    );
  }

  private removeFromCompleted(task: string) {
    this.completedTasks = this.completedTasks.filter(
      (currentTask) => currentTask !== task
    );
  }
}
