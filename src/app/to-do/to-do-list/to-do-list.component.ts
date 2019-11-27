import { Component, OnInit } from '@angular/core';

// import { v4 as uuid } from 'uuid';
// map(tasks => tasks.map(task => ({ ...task, id: uuid() }))),

import { ToDoService } from 'src/app/core/to-do.service';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  tasks$ = this.todoService.getTasks();

  constructor(private todoService: ToDoService) {}

  ngOnInit() {}
}
