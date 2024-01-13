import { Assignment } from './assignment-card.component';

export const assignmentCardMother: Assignment = {
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
};
