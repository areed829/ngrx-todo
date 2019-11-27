import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { AddTaskComponent } from './add-task/add-task.component';
import { TaskInDangerDirective } from './task-in-danger.directive';

@NgModule({
  imports: [CommonModule, BsDatepickerModule, ReactiveFormsModule],
  exports: [AddTaskComponent, TaskInDangerDirective],
  declarations: [AddTaskComponent, TaskInDangerDirective],
  entryComponents: [AddTaskComponent]
})
export class SharedModule {}
