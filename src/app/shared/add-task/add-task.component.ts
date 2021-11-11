import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-task',
  templateUrl: 'add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  @Output() addtask = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  addedTask(taskInput: HTMLInputElement) {
    this.addtask.emit(taskInput.value);
    taskInput.value = '';
  }
}
