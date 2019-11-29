import * as fromTaskActions from '../actions/task-old.action';
import { Task } from 'src/app/models';

export interface TaskState {
  tasks: Task[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TaskState = {
  tasks: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromTaskActions.TaskActions
): TaskState {
  switch (action.type) {
    case fromTaskActions.LOAD_TASKS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromTaskActions.LOAD_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        tasks: action.payload
      };
    }
    case fromTaskActions.LOAD_TASKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromTaskActions.UPDATE_TASK: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromTaskActions.UPDATE_TASK_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromTaskActions.UPDATE_TASK_SUCCESS: {
      const tasks = [
        ...state.tasks.filter(task => task.id !== action.payload.id),
        action.payload
      ];
      return {
        ...state,
        tasks
      };
    }
    case fromTaskActions.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: true,
        loaded: false
      };
    }
    case fromTaskActions.ADD_TASK_FAIL: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.task.id),
        loaded: false,
        loading: true
      };
    }
    case fromTaskActions.ADD_TASK_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }
    case fromTaskActions.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
        loaded: false,
        loading: true
      };
    }
    case fromTaskActions.DELETE_TASK_FAIL: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
        loaded: false,
        loading: true
      };
    }
    case fromTaskActions.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const getTasks = (state: TaskState) => state.tasks;
export const getTasksLoading = (state: TaskState) => state.loading;
export const getTasksLoaded = (state: TaskState) => state.loaded;
