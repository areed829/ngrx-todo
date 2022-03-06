import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, startWith, Subject, tap } from 'rxjs';

interface RxjsHomeComponentState {
  incompleteTasks: string[];
  completedTasks: string[];
}

@Component({
  selector: 'selector-name',
  templateUrl: 'rxjs-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsHomeComponent implements OnInit {
  incompleteTasks$: Subject<string[]>;
  completedTasks$: Subject<string[]>;
  state$: Observable<RxjsHomeComponentState>;

  constructor() {}

  ngOnInit() {
    this.incompleteTasks$ = new Subject<string[]>();
    this.completedTasks$ = new Subject<string[]>();

    this.state$ = combineLatest([
      this.incompleteTasks$.pipe(startWith([])),
      this.completedTasks$.pipe(startWith([])),
    ]).pipe(
      map(([incompleteTasks, completedTasks]) => ({
        incompleteTasks,
        completedTasks,
      }))
    );
  }

  addTask(task: string, state: RxjsHomeComponentState) {
    if (this.validateTask(task, state)) {
      this.addToIncomplete(task, state);
    }
  }

  completeTask(task: string, state: RxjsHomeComponentState) {
    this.removeFromIncomplete(task, state);
    this.addToCompleted(task, state);
  }

  deletedFromTodo(task: string, state: RxjsHomeComponentState) {
    this.removeFromIncomplete(task, state);
  }

  markAsIncompleted(task: string, state: RxjsHomeComponentState) {
    this.removeFromCompleted(task, state);
    this.addToIncomplete(task, state);
  }

  deleteFromCompleted(task: string, state: RxjsHomeComponentState) {
    this.removeFromCompleted(task, state);
  }

  private addToIncomplete(task: string, state: RxjsHomeComponentState) {
    this.incompleteTasks$.next([...state.incompleteTasks, task]);
  }

  private removeFromIncomplete(task: string, state: RxjsHomeComponentState) {
    this.incompleteTasks$.next(
      this.removeFromArray(task, state.incompleteTasks)
    );
  }

  private addToCompleted(task: string, state: RxjsHomeComponentState) {
    this.completedTasks$.next([...state.completedTasks, task]);
  }

  private removeFromCompleted(task: string, state: RxjsHomeComponentState) {
    this.completedTasks$.next(this.removeFromArray(task, state.completedTasks));
  }

  private removeFromArray(task: string, tasks: string[]) {
    return tasks.filter((currentTask) => currentTask !== task);
  }

  private validateTask(task: string, state: RxjsHomeComponentState) {
    return (
      task &&
      ![...state.incompleteTasks, ...state.completedTasks].find(
        (currentTask) =>
          currentTask.localeCompare(task, undefined, {
            sensitivity: 'base',
          }) === 0
      )
    );
  }
}
