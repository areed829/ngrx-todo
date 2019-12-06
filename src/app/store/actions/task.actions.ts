import { createAction, props } from '@ngrx/store';
import { Task } from '../../models';
import { v4 as uuid } from 'uuid';

// Add Tasks
// export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addTask = createAction(
  '[Task] Add Task',
  (taskPayload: { task: Task }) => ({
    task: {
      ...taskPayload.task,
      id: uuid()
    }
  })
);

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
