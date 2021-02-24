import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActivitesChart from './ActivitesChart';

export default {
  title: 'molecules/Activity',
  component: ActivitesChart,
} as Meta;

const Template: Story = (args) => <ActivitesChart {...args} />;
export const SActivitesChart = Template.bind({});
