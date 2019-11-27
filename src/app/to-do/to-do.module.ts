import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TodoRoutingModule } from './to-do-routing.module';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ModalModule, SharedModule, TodoRoutingModule],
  declarations: [ToDoListComponent, ToDoItemComponent]
})
export class ToDoModule {}
