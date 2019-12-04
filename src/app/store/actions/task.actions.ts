import { createAction, props } from '@ngrx/store';
import { Task } from '../../models';

// Add Tasks
export const AddTask = createAction('[Task] Add Task', props<{ task: Task }>());

// Update Tasks
export const UpdateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);

// Delete Tasks
export const DeleteTask = createAction(
  '[Task] Delete Task',
  props<{ task: Task }>()
);
