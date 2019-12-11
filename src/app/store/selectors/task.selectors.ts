import { createSelector, createFeatureSelector } from '@ngrx/store';
import { taskFeatureKey, TaskState } from '../reducers';
import { compareDesc, parseISO, compareAsc } from 'date-fns';
import { Task } from '../../models/task';
// ngFeatureSelector, ngTaskSelector, ngCompleted, ngCompleteSort

export const taskFeatureSelector = createFeatureSelector(taskFeatureKey);

export const getTasks = createSelector(
  taskFeatureSelector,
  (state: TaskState) => state.tasks
);

export const getUncompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => !task.completed)
);

export const getCompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => task.completed)
);
