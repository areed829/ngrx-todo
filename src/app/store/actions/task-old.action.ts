import { Action } from '@ngrx/store';
import { Task } from '../../models';

export const LOAD_TASKS = '[Task] Load Tasks';
export const LOAD_TASKS_FAIL = '[Task] Load Tasks Fail';
export const LOAD_TASKS_SUCCESS = '[Task] Load Tasks Success';

export class LoadTasks implements Action {
  readonly type = LOAD_TASKS;
}

export class LoadTasksFail implements Action {
  readonly type = LOAD_TASKS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTasksSuccess implements Action {
  readonly type = LOAD_TASKS_SUCCESS;
  constructor(public payload: Task[]) {}
}

export const ADD_TASK = '[Task] Add Task';
export const ADD_TASK_FAIL = '[Task] Add Task Fail';
export const ADD_TASK_SUCCESS = '[Task] Add Task Success';

export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: Task) {}
}

export class AddTaskFail implements Action {
  readonly type = ADD_TASK_SUCCESS;
  constructor(public payload: { task: Task; error: any }) {}
}

export class AddTaskSuccess implements Action {
  readonly type = ADD_TASK_SUCCESS;
}

export const UPDATE_TASK = '[Task] Update Task';
export const UPDATE_TASK_FAIL = '[Task] Update Task Fail';
export const UPDATE_TASK_SUCCESS = '[Task] Update Task Success';

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;
  constructor(public payload: Task) {}
}

export class UpdateTaskFail implements Action {
  readonly type = UPDATE_TASK_FAIL;
  constructor(public payload: { task: Task; error: any }) {}
}

export class UpdateTaskSuccess implements Action {
  readonly type = UPDATE_TASK_SUCCESS;
}

export const DELETE_TASK = '[Task] Delete Task';
export const DELETE_TASK_FAIL = '[Task] Delete Task Fail';
export const DELETE_TASK_SUCCESS = '[Task] Delete Task Success';

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: Task) {}
}

export class DeleteTaskFail implements Action {
  readonly type = DELETE_TASK_FAIL;
  constructor(public payload: { task: Task; error: any }) {}
}

export class DeleteTaskSuccess implements Action {
  readonly type = DELETE_TASK_SUCCESS;
}

export type TaskActions =
  | LoadTasks
  | LoadTasksFail
  | LoadTasksSuccess
  | AddTask
  | AddTaskFail
  | AddTaskSuccess
  | UpdateTask
  | UpdateTaskFail
  | UpdateTaskSuccess
  | DeleteTask
  | DeleteTaskFail
  | DeleteTaskSuccess;
