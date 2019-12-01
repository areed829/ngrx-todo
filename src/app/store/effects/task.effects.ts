import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError, concatMap } from 'rxjs/operators';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import { ToDoService } from 'src/app/core/to-do.service';

import * as fromTaskActions from '../actions/task-new.action';

@Injectable()
export class TaskEffects {
  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTaskActions.LoadTasks),
      switchMap(() => this.todoService.getTasks()),
      map(tasks => fromTaskActions.LoadTasksSucces({ tasks })),
      catchError(error => of(fromTaskActions.LoadTasksFail({ error })))
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTaskActions.AddTask),
      concatMap(({ task }) =>
        this.todoService.createTask(task).pipe(
          map(() => fromTaskActions.AddTaskSucces()),
          catchError(error => of(fromTaskActions.AddTaskFail({ task, error })))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTaskActions.UpdateTask),
      concatMap(({ task }) =>
        this.todoService.updateTask(task).pipe(
          map(() => fromTaskActions.UpdateTaskSuccess({ task })),
          catchError(error => of(fromTaskActions.UpdateTaskFail({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTaskActions.DeleteTask),
      concatMap(({ task }) =>
        this.todoService.deleteTask(task.id).pipe(
          map(() => fromTaskActions.DeleteTaskSuccess()),
          catchError(error =>
            of(fromTaskActions.DeleteTaskFail({ task, error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: ToDoService) {}
}
