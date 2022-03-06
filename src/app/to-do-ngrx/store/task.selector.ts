import { createFeatureSelector, createSelector } from '@ngrx/store';
import { taskFeatureKey, TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>(taskFeatureKey);
export const selectIncompleteTasks = createSelector(
  selectTaskState,
  (state) => state.incompleteTasks
);
export const selectCompletedTasks = createSelector(
  selectTaskState,
  (state) => state.completedTasks
);
