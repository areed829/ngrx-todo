import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Task } from 'src/app/models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'add-task',
  template: `
    <form class="py-3 px-3 form" [formGroup]="taskForm" (ngSubmit)="onSubmit()">
      <h3 class="text-center">Add Task</h3>
      <div class="form-group">
        <input
          type="text"
          placeholder="Task"
          class="form-control"
          formControlName="title"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Date to Complete By"
          class="form-control"
          bsDatepicker
          [bsConfig]="{ isAnimated: true }"
          formControlName="completeByDate"
        />
      </div>
      <button
        class="btn btn-primary mr-2"
        type="submit"
        [disabled]="!taskForm.valid"
      >
        Add
      </button>
      <button class="btn btn-outline-secondary" (click)="cancel()">
        Cancel
      </button>
    </form>
  `
})
export class AddTaskComponent implements OnInit {
  addTask = new Subject<Task>();
  taskForm: FormGroup;

  constructor(
    private bsModalRef: BsModalRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      completeByDate: new FormControl(new Date(), Validators.required)
    });
  }

  onSubmit() {
    this.addTask.next({
      completed: false,
      performBy: new Date(
        this.taskForm.get('completeByDate').value
      ).toISOString(),
      title: this.taskForm.get('title').value,
      id: null
    });
    this.bsModalRef.hide();
  }

  cancel() {
    this.bsModalRef.hide();
    this.addTask.next(null);
  }
}
