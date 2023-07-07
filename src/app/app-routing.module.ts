import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Module } from '../../projects/app1/src/app/app.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () =>
      import('../../projects/app1/src/app/app.module').then(
        (m) => m.App1Module
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), App1Module.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
