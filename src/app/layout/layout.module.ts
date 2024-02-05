import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiScrollDirective, UiTopbarComponent } from '@nikosoftware/core-ui';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiTopbarComponent,
    UiScrollDirective,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
