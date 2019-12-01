import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { parseISO, compareAsc, compareDesc } from 'date-fns';

import { Observable, pipe } from 'rxjs';
import { take, tap, filter, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Task } from 'src/app/models';
import { AddTaskComponent } from '../../shared/add-task/add-task.component';

const sortTasksByDate = pipe(
  map((tasks: Task[]) =>
    tasks.sort((a, b) =>
      compareAsc(parseISO(a.performBy), parseISO(b.performBy))
    )
  )
);

@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  unCompletedtasks: Observable<Task[]> = this.store
    .select(fromStore.getUncompletedTasks)
    .pipe(sortTasksByDate);
  completedTasks: Observable<Task[]> = this.store
    .select(fromStore.getCompletedTasks)
    .pipe(sortTasksByDate);

  private bsModalRef: BsModalRef;

  constructor(
    private store: Store<fromStore.TaskState>,
    private bsModalService: BsModalService
  ) {}

  ngOnInit() {
    this.store.dispatch(fromStore.LoadTasks());
  }

  addTask() {
    this.bsModalRef = this.bsModalService.show(AddTaskComponent, {
      ignoreBackdropClick: true
    });

    this.bsModalRef.content.addTask
      .pipe(
        take(1),
        filter(task => !!task),
        tap((task: Task) => this.store.dispatch(fromStore.AddTask({ task })))
      )
      .subscribe();
  }

  deleteTask(task: Task) {
    this.store.dispatch(fromStore.DeleteTask({ task }));
  }

  taskCompletionToggled(completed: boolean, task: Task) {
    const updatedTask = { ...task, completed };
    this.store.dispatch(fromStore.UpdateTask({ task: updatedTask }));
  }
}
