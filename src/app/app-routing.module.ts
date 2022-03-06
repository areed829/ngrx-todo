import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo' },
  {
    path: 'todo',
    loadChildren: () =>
      import('./to-do/to-do.module').then((m) => m.ToDoModule),
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./to-do-rxjs/to-do-rxjs.module').then((m) => m.ToDoRxjsModule),
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./to-do-ngrx/to-do-ngrx.module').then((m) => m.ToDoNgrxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
