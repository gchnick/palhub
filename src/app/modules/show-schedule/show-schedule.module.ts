import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTypescaleComponent } from '@nikosoftware/core-ui';
import { AssignmentCardComponent } from './pages/assignment-card/assignment-card.component';
import { ShowScheduleComponent } from './pages/show-schedule/show-schedule.component';
import { ShowScheduleRoutingModule } from './show-schedule-routing.module';

@NgModule({
  declarations: [ShowScheduleComponent],
  imports: [
    CommonModule,
    ShowScheduleRoutingModule,
    AssignmentCardComponent,
    UiTypescaleComponent,
  ],
})
export class ShowScheduleModule {}
