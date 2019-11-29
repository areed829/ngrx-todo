import { Action, createReducer, on } from '@ngrx/store';

import * as fromTaskActions from '../actions/task-new.action';
import { Task } from 'src/app/models';

export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
  loaded: boolean;
  loading: boolean;
}

export const initialSate: TaskState = {
  tasks: [],
  loaded: false,
  loading: false
};

const taskReducer = createReducer(
  initialSate,
  on(fromTaskActions.LoadTasks, state => ({
    ...state,
    loaded: false,
    loading: true
  })),
  on(fromTaskActions.LoadTasksFail, state => ({
    ...state,
    loaded: false,
    loading: false
  })),
  on(fromTaskActions.LoadTasksSucces, (state, { tasks }) => ({
    ...state,
    tasks,
    loaded: true,
    loading: false
  })),
  on(fromTaskActions.UpdateTask, state => ({
    ...state,
    loaded: false,
    loading: true
  })),
  on(fromTaskActions.UpdateTaskFail, state => ({
    ...state,
    loaded: false,
    loading: false
  })),
  on(fromTaskActions.UpdateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [
      ...state.tasks.filter(currentTask => currentTask.id !== task.id),
      task
    ],
    loaded: true,
    loading: false
  })),
  on(fromTaskActions.AddTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loaded: false,
    loading: true
  })),
  on(fromTaskActions.AddTaskFail, (state, { task }) => ({
    ...state,
    tasks: state.tasks.filter(currentTask => currentTask.id !== task.id),
    loaded: false,
    loading: false
  })),
  on(fromTaskActions.AddTaskSucces, state => ({
    ...state,
    loaded: true,
    loading: true
  })),
  on(fromTaskActions.DeleteTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.filter(currentTask => currentTask.id !== task.id),
    loaded: false,
    loading: true
  })),
  on(fromTaskActions.DeleteTaskFail, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loaded: false,
    loading: false
  })),
  on(fromTaskActions.DeleteTaskSuccess, state => ({
    ...state,
    loaded: true,
    loading: false
  }))
);

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}
