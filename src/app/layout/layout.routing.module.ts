import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'shedule',
    loadChildren: () =>
      import('../modules/show-schedule/show-schedule.module').then(
        (m) => m.ShowScheduleModule
      ),
  },
  {
    path: '**',
    data: { title: 'Página no encontrada' },
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
