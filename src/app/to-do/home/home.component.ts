import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  incompleteTasks: string[] = ['First task'];
  completedTasks: string[] = ['Completed task'];

  constructor() {}

  ngOnInit() {}

  addTask(task: string) {
    if (this.validateInput(task)) {
      this.addToIncomplete(task);
    }
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

  validateInput(task: string) {
    return task && !this.duplicateExists(task);
  }

  private duplicateExists(task: string) {
    return !![...this.incompleteTasks, ...this.completedTasks].find(
      (currentTask) => currentTask.localeCompare(task) === 0
    );
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
