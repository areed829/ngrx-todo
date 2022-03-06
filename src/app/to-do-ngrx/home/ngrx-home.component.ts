import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTask from '../store';

@Component({
  templateUrl: 'ngrx-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxHomeComponent implements OnInit {
  state$ = this.store.select(fromTask.selectTaskState);
  constructor(private store: Store<fromTask.TaskState>) {}

  ngOnInit() {}

  addTask(task: string) {
    this.store.dispatch(fromTask.addTask({ task }));
  }

  completeTask(task: string) {
    this.store.dispatch(fromTask.completeTask({ task }));
  }

  markAsIncompleted(task: string) {
    this.store.dispatch(fromTask.markAsIncompleted({ task }));
  }

  deleteTask(task: string) {
    this.store.dispatch(fromTask.removeTask({ task }));
  }
}
