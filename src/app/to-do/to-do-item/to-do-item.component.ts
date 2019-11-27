import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'to-do-item',
  templateUrl: 'to-do-item.component.html'
})
export class ToDoItemComponent implements OnInit {
  @Input() task: Task;

  @Output() taskCompletetoggled = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  deleteClicked() {
    this.delete.next();
  }

  taskCompleteToggle(checked) {
    this.taskCompletetoggled.next(checked);
  }
}
