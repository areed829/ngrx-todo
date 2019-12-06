import { createAction, props } from '@ngrx/store';
import { Task } from '../../models';

// Add Tasks
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());

// Update Tasks
export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);

// Delete Tasks
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ task: Task }>()
);
