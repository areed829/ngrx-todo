import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { NgrxHomeComponent } from './home/ngrx-home.component';
import { taskFeatureKey, taskReducer } from './store';
import { ReactiveComponentModule } from '@ngrx/component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: NgrxHomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(taskFeatureKey, taskReducer),
    ReactiveComponentModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [NgrxHomeComponent],
  providers: [],
})
export class ToDoNgrxModule {}
