import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsHomeComponent } from './home/rxjs-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: RxjsHomeComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RxjsHomeComponent],
  providers: [],
})
export class ToDoRxjsModule {}
