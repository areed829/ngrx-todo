import { Directive, Input, HostBinding } from '@angular/core';

import { subDays, isAfter, parseISO, isEqual } from 'date-fns';

import { Task } from '../models';

@Directive({ selector: '[taskInDanger]' })
export class TaskInDangerDirective {
  @HostBinding('class.list-group-item-danger') elementIsInDanger: boolean;

  @Input('taskInDanger') set task(task: Task) {
    this.elementIsInDanger = this.withInTwoDaysOfSetDate(
      parseISO(task.performBy)
    );
  }

  private withInTwoDaysOfSetDate(taskDate: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    taskDate.setHours(0, 0, 0, 0);
    taskDate = subDays(taskDate, 2);

    return isAfter(today, taskDate) || isEqual(today, taskDate);
  }
}
