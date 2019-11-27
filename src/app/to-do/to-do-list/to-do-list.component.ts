import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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

  constructor(
    private todoService: ToDoService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit() {
    this.todoService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  addTask() {
    this.bsModalRef = this.bsModalService.show(AddTaskComponent, {
      ignoreBackdropClick: true
    });

    this.bsModalRef.content.addTask
      .pipe(
        take(1),
        filter(task => !!task),
        switchMap((task: Task) => this.todoService.createTask(task)),
        switchMap(() => this.todoService.getTasks()),
        tap((tasks: Task[]) => (this.tasks = tasks))
      )
      .subscribe();
  }

  deleteTask(task: Task) {
    this.todoService
      .deleteTask(task.id)
      .pipe(
        switchMap(() => this.todoService.getTasks()),
        tap(tasks => (this.tasks = tasks))
      )
      .subscribe();
  }

  taskCompletionToggled(completed: boolean, task: Task) {
    this.todoService.updateTask({ ...task, completed }).subscribe();
  }
}
