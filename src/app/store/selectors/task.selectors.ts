import { createSelector, createFeatureSelector } from '@ngrx/store';
import { taskFeatureKey, TaskState } from '../reducers';
import { compareDesc, parseISO, compareAsc } from 'date-fns';
import { Task } from '../../models/task';
// ngFeatureSelector, ngTaskSelector, ngCompleted

export const taskFeatureSelector = createFeatureSelector(taskFeatureKey);

export const getTasks = createSelector(
  taskFeatureSelector,
  (state: TaskState) => state.tasks
);

export const getUncompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => !task.completed)
);

export const getUncompletedTasksSortedByDate = createSelector(
  getUncompletedTasks,
  (tasks: Task[], props: { order: 'desc' | 'asc' }) => {
    return props.order === 'desc'
      ? tasks.sort((a, b) =>
          compareDesc(parseISO(a.performBy), parseISO(b.performBy))
        )
      : tasks.sort((a, b) =>
          compareAsc(parseISO(a.performBy), parseISO(b.performBy))
        );
  }
);

export const getCompletedTasks = createSelector(getTasks, tasks =>
  tasks.filter(task => task.completed)
);

export const getCompletedTasksSortedByDate = createSelector(
  getCompletedTasks,
  (tasks: Task[], props: { order: 'desc' | 'asc' }) => {
    return props.order === 'desc'
      ? tasks.sort((a, b) =>
          compareDesc(parseISO(a.performBy), parseISO(b.performBy))
        )
      : tasks.sort((a, b) =>
          compareAsc(parseISO(a.performBy), parseISO(b.performBy))
        );
  }
);
