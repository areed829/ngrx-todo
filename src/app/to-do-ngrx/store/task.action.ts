import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Task] Add', props<{ task: string }>());
export const completeTask = createAction(
  '[Task] Complete',
  props<{ task: string }>()
);
export const markAsIncompleted = createAction(
  '[Task] Mark as Incompleted',
  props<{ task: string }>()
);
export const removeTask = createAction(
  '[Task] Remove task',
  props<{ task: string }>()
);
