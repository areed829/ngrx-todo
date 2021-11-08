import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.component.html',
})
export class ToDoListComponent implements OnInit {
  @Input() tasks: string[];

  @Output() completed = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  complete(task: string) {
    this.completed.emit(task);
  }

  delete(task: string) {
    this.deleted.emit(task);
  }
}
