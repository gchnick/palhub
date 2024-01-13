import { Route } from '@angular/router';
import { LayoutComponent } from './layout/pages/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '/test',
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];
