import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'completed-to-do-list',
  templateUrl: 'completed-to-do-list.component.html',
})
export class CompletedToDoListComponent implements OnInit {
  @Input() tasks: string[];

  @Output() incomplete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  markAsIncomplete(task: string) {
    this.incomplete.emit(task);
  }

  deleted(task: string) {
    this.delete.emit(task);
  }
}
