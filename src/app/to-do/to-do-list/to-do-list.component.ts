import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';
import { take, tap, filter, map } from 'rxjs/operators';

import { Task } from 'src/app/models';
import { AddTaskComponent } from '../../shared/add-task/add-task.component';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  bsModalRef: BsModalRef;
  uncompletedTasks$: Observable<Task[]> = this.store.pipe(
    select(fromStore.getUncompletedTasksSortedByDate, { order: 'asc' })
  );
  completedTasks$: Observable<Task[]> = this.store.pipe(
    select(fromStore.getCompletedTasksSortedByDate, { order: 'desc' })
  );

  constructor(
    private store: Store<fromStore.TaskState>,
    private bsModalService: BsModalService
  ) {}

  ngOnInit() {}

  addTask() {
    this.bsModalRef = this.bsModalService.show(AddTaskComponent, {
      ignoreBackdropClick: true
    });

    this.bsModalRef.content.addTask
      .pipe(
        take(1),
        filter(Boolean),
        map(task => ({ ...task, id: new Date().getTime() })),
        tap((task: Task) => this.store.dispatch(fromStore.addTask({ task })))
      )
      .subscribe();
  }

  deleteTask(task: Task) {
    this.store.dispatch(fromStore.deleteTask({ task }));
  }

  taskCompletionToggled(completed: boolean, task: Task) {
    const updatedTask: Task = { ...task, completed };
    this.store.dispatch(fromStore.updateTask({ task: updatedTask }));
  }
}
