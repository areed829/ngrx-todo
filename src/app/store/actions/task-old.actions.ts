import { Action } from '@ngrx/store';
import { Task } from '../../models';

export const ADD_TASK = '[Task] Add Task';

export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: Task) {}
}

export const UPDATE_TASK = '[Task] Update Task';

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;
  constructor(public payload: Task) {}
}
export const DELETE_TASK = '[Task] Delete Task';

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: Task) {}
}

export type TaskActions = AddTask | UpdateTask | DeleteTask;
