import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BsDatepickerModule, ReactiveFormsModule],
  exports: [AddTaskComponent],
  declarations: [AddTaskComponent],
  entryComponents: [AddTaskComponent]
})
export class SharedModule {}
