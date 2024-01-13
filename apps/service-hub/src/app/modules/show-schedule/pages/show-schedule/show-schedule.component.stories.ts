import {
  RegistryIconService,
  UiTypescaleComponent,
} from '@nikosoftware/core-ui';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AssignmentCardComponent } from '../assignment-card/assignment-card.component';
import { registryIconServiceFactory } from '../assignment-card/assignment-card.component.stories';
import { ShowScheduleComponent } from './show-schedule.component';

const meta: Meta<ShowScheduleComponent> = {
  title: 'Design System/Organinms/Show Schedule',
  component: ShowScheduleComponent,
  tags: ['autodocs'],
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [UiTypescaleComponent, AssignmentCardComponent],
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
type Story = StoryObj<ShowScheduleComponent>;

export const Primary: Story = {
  render: (args: ShowScheduleComponent) => ({
    props: args,
  }),
  args: {},
};
