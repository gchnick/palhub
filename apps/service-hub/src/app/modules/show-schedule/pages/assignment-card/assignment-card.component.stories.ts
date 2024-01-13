import { RegistryIconService } from '@nikosoftware/core-ui';
import {
  uiIconAccountCircleFill,
  uiIconLocationOnFill,
  uiIconMapFill,
  uiIconScheduleFill,
} from '@nikosoftware/svg-icons';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AssignmentCardComponent } from './assignment-card.component';
import { assignmentCardMother as dataMock } from './assignment-card.mother';

export const registryIconServiceFactory = () => {
  const service = new RegistryIconService();
  service.registerIcons([
    uiIconLocationOnFill,
    uiIconMapFill,
    uiIconAccountCircleFill,
    uiIconScheduleFill,
  ]);
  return service;
};

const meta: Meta<AssignmentCardComponent> = {
  title: 'Design System/Molecules/Assignment Card',
  component: AssignmentCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: RegistryIconService,
          useFactory: registryIconServiceFactory,
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<AssignmentCardComponent>;

export const Primary: Story = {
  render: (args: AssignmentCardComponent) => ({
    props: args,
  }),
  args: {
    referencePoint: dataMock.referencePoint.label,
    territoryAssigned: dataMock.territoryAssigned.label,
    conductor: dataMock.conductor.name,
    date: dataMock.date,
  },
};
