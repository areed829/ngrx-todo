import { createReducer, on } from '@ngrx/store';
import * as taskActions from './task.action';

export const taskFeatureKey = 'task';

export interface TaskState {
  completedTasks: string[];
  incompleteTasks: string[];
}

const initialState: TaskState = {
  completedTasks: [],
  incompleteTasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(taskActions.addTask, (state, { task }) => ({
    ...state,
    incompleteTasks: [...state.incompleteTasks, task],
  })),
  on(taskActions.completeTask, (state, { task }) => ({
    ...state,
    incompleteTasks: state.incompleteTasks.filter((t) => t !== task),
    completedTasks: [...state.completedTasks, task],
  })),
  on(taskActions.markAsIncompleted, (state, { task }) => ({
    ...state,
    incompleteTasks: [...state.incompleteTasks, task],
    completedTasks: state.completedTasks.filter((t) => t !== task),
  })),
  on(taskActions.removeTask, (state, { task }) => ({
    ...state,
    incompleteTasks: state.incompleteTasks.filter((t) => t !== task),
    completedTasks: state.completedTasks.filter((t) => t !== task),
  }))
);
