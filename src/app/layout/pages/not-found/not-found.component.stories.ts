import { Meta } from '@storybook/angular';
import { NotFoundComponent } from './not-found.component';

export default {
  title: 'Design system/Templates/Not Found',
  component: NotFoundComponent,
} as Meta<NotFoundComponent>;

export const Primary = {
  render: (args: NotFoundComponent) => ({
    props: args,
  }),
  args: {},
};
