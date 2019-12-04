import { Action, createReducer, on } from '@ngrx/store';

import * as fromTaskActions from '../actions/task.actions';
import { Task } from 'src/app/models';

export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
}

export const initialSate: TaskState = {
  tasks: []
};

const taskReducer = createReducer(
  initialSate,
  on(fromTaskActions.AddTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(fromTaskActions.UpdateTask, (state, { task }) => ({
    ...state,
    tasks: [
      ...state.tasks.filter(currentTask => currentTask.id !== task.id),
      task
    ]
  })),
  on(fromTaskActions.DeleteTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.filter(currentTask => currentTask.id !== task.id)
  }))
);

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}
