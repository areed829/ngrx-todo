import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoRoutingModule } from './to-do-routing.module';

@NgModule({
  imports: [CommonModule, TodoRoutingModule],
  exports: [],
  declarations: [ToDoListComponent],
  providers: []
})
export class ToDoModule {}
