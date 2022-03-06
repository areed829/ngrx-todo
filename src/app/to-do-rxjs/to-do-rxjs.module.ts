import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RxjsHomeComponent } from './home/rxjs-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: RxjsHomeComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [RxjsHomeComponent],
  providers: [],
})
export class ToDoRxjsModule {}
