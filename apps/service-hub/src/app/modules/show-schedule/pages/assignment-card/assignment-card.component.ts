import { Component, HostBinding, Input, OnInit, inject } from '@angular/core';
import {
  RegistryIconService,
  UiIconComponent,
  UiTypescaleComponent,
} from '@nikosoftware/core-ui';
import {
  uiIconAccountCircle,
  uiIconLocationOn,
  uiIconMap,
  uiIconSchedule,
} from '@nikosoftware/svg-icons';
import { PreachTimePipe } from '../../pipes/preach-time.pipe';

export type ID = { value: string };
type ReferencePoint = { label: string };
type Territory = {
  number: number;
  label: string;
  referencePoints?: ReferencePoint[];
};
type Conductor = { id: ID; name: string; mobilePhone: string };
export type Assignment = {
  id: ID;
  date: Date;
  territoryAssigned: Territory;
  referencePoint: ReferencePoint;
  conductor: Conductor;
};

@Component({
  selector: 'app-assignment-card',
  standalone: true,
  imports: [UiIconComponent, UiTypescaleComponent, PreachTimePipe],
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css'],
})
export class AssignmentCardComponent implements OnInit {
  private readonly registryIconService = inject(RegistryIconService);
  @Input({ required: true }) referencePoint!: string;
  @Input({ required: true }) territoryAssigned!: string;
  @Input({ required: true }) conductor!: string;
  @Input({ required: true }) date!: Date;

  @HostBinding('class') get clazz() {
    return `assignment-card`;
  }

  ngOnInit(): void {
    this.registryIcons();
  }

  registryIcons() {
    this.registryIconService.registerIcons([
      uiIconLocationOn,
      uiIconMap,
      uiIconAccountCircle,
      uiIconSchedule,
    ]);
  }
}
