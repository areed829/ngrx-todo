import { createAction, props } from '@ngrx/store';
import { Task } from '../../models';

// Load Tasks
export const LoadTasks = createAction('[Task] Load Tasks');
export const LoadTasksFail = createAction(
  '[Task] Load Tasks Fail',
  props<{ error: any }>()
);
export const LoadTasksSucces = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

// Add Tasks
export const AddTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const AddTaskFail = createAction(
  '[Task] Add TaskFail',
  props<{ task: Task; error: any }>()
);
export const AddTaskSucces = createAction('[Task] Add Task Success');

// Update Tasks
export const UpdateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);
export const UpdateTaskFail = createAction(
  '[Task] Update Task Fail',
  props<{ error: any }>()
);
export const UpdateTaskSuccess = createAction(
  '[Task] Update Task Success',
  props<{ task: Task }>()
);

// Delete Tasks
export const DeleteTask = createAction(
  '[Task Delete Task]',
  props<{ task: Task }>()
);
export const DeleteTaskFail = createAction(
  '[Task Delete Task]',
  props<{ task: Task; error: any }>()
);
export const DeleteTaskSuccess = createAction('[Task Delete Task]');
