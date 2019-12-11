import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { parseISO, compareAsc, compareDesc } from 'date-fns';

import { take, switchMap, tap, filter } from 'rxjs/operators';

import { ToDoService } from 'src/app/core/to-do.service';
import { Task } from 'src/app/models';
import { AddTaskComponent } from '../../shared/add-task/add-task.component';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  bsModalRef: BsModalRef;
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(
    private todoService: ToDoService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit() {
    this.todoService.getTasks().subscribe(tasks => this.setTasks(tasks));
  }

  saveTask(task) {
    this.todoService
      .createTask(task)
      .pipe(
        switchMap(() => this.todoService.getTasks()),
        tap(tasks => this.setTasks(tasks))
      )
      .subscribe();
  }

  deleteTask(task: Task) {
    this.todoService
      .deleteTask(task.id)
      .pipe(
        switchMap(() => this.todoService.getTasks()),
        tap(tasks => this.setTasks(tasks))
      )
      .subscribe();
  }

  taskCompletionToggled(completed: boolean, task: Task) {
    this.todoService
      .updateTask({ ...task, completed })
      .pipe(
        switchMap(() => this.todoService.getTasks()),
        tap(tasks => this.setTasks(tasks))
      )
      .subscribe();
  }

  setTasks(tasks: Task[]) {
    this.tasks = this.getNonCompletedTasks(tasks);
    this.completedTasks = this.getCompletedTasks(tasks);
  }

  openModal() {
    this.bsModalRef = this.bsModalService.show(AddTaskComponent, {
      ignoreBackdropClick: true
    });

    this.bsModalRef.content.addTask
      .pipe(
        take(1),
        filter(Boolean),
        tap((task: Task) => this.saveTask(task))
      )
      .subscribe();
  }

  private getNonCompletedTasks(tasks: Task[]) {
    return tasks.filter(task => !task.completed);
  }

  private getCompletedTasks(tasks: Task[]) {
    return tasks.filter(task => task.completed);
  }
}
