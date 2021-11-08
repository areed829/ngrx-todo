import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'to-do-item',
  templateUrl: 'to-do-item.component.html',
})
export class ToDoItemComponent implements OnInit {
  @Input() task: string;

  constructor() {}

  ngOnInit() {}
}
