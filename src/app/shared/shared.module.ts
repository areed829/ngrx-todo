import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { CompletedToDoListComponent } from './completed-to-do-list/completed-to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [ToDoListComponent, CompletedToDoListComponent, AddTaskComponent],
  declarations: [
    ToDoListComponent,
    ToDoItemComponent,
    CompletedToDoListComponent,
    AddTaskComponent,
  ],
  providers: [],
})
export class SharedModule {}
