import { createSelector, createFeatureSelector } from '@ngrx/store';
import { taskFeatureKey, TaskState } from '../reducers';
// ngFeatureSelector, ngTaskSelector, ngLoadingStateSelector, ngCompleted

export const taskFeatureSelector = createFeatureSelector(taskFeatureKey);

export const getTasks = createSelector(
  taskFeatureSelector,
  (state: TaskState) => state.tasks
);

export const getTaskLoading = createSelector(
  taskFeatureSelector,
  (state: TaskState) => state.loading
);

export const getTaskLoaded = createSelector(
  taskFeatureSelector,
  (state: TaskState) => state.loaded
);

export const getUncompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => !task.completed)
);

export const getCompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => task.completed)
);
