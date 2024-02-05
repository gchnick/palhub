import { Component } from '@angular/core';
import { Assignment, ID } from '../assignment-card/assignment-card.component';

export type Meetings = {
  id: ID;
  day: Date;
  assignments: Assignment[];
};

@Component({
  selector: 'app-show-shedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css'],
})
export class ShowScheduleComponent {
  readonly meetings: Meetings[] = [
    {
      id: { value: '05721d74-4be4-4ab7-8656-9bcbea3d672b' },
      day: new Date('2023-07-23T00:00:00.240Z'),
      assignments: [
        {
          id: { value: 'd823c0c2-eb3e-4795-87dd-67e4f316170d' },
          date: new Date('2023-07-23T13:00:00.240Z'),
          territoryAssigned: {
            number: 3,
            label: 'Las Palmeras',
            referencePoints: [],
          },
          referencePoint: { label: 'Calle 3 frente a Common Shop' },
          conductor: {
            id: { value: 'f2b1e24b-3045-4790-a985-0f75cc66f8a5' },
            name: 'Miguel Bueno',
            mobilePhone: '0000-000.0000',
          },
        },
        {
          id: { value: 'c40f4d7b-43c4-4d9f-a480-53f064fed989' },
          date: new Date('2023-07-23T20:30:00.240Z'),
          territoryAssigned: {
            number: 1,
            label: 'Las Romana',
            referencePoints: [],
          },
          referencePoint: { label: 'Casa de la familia Gonzáles' },
          conductor: {
            id: { value: '76c44755-d456-4a11-b905-273c93e56a73' },
            name: 'Juan Leal',
            mobilePhone: '0000-000.0000',
          },
        },
      ],
    },
    {
      id: { value: '888d1e79-672f-4c5b-a06e-42f8bddc4e58' },
      day: new Date('2023-07-24T00:00:00.240Z'),
      assignments: [
        {
          id: { value: 'e5aa1b5c-daf1-402d-942b-7683a6308ae7' },
          date: new Date('2023-07-23T13:00:00.240Z'),
          territoryAssigned: {
            number: 2,
            label: 'Comarca',
            referencePoints: [],
          },
          referencePoint: { label: 'Plaza Paz' },
          conductor: {
            id: { value: 'e5aa1b5c-daf1-402d-942b-7683a6308ae7' },
            name: 'Pedro Paciente',
            mobilePhone: '0000-000.0000',
          },
        },
      ],
    },
  ];
}
