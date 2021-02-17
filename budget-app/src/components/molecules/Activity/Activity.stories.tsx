import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Activity from './Activity';

export default {
  title: 'molecules/Activity',
  component: Activity,
} as Meta;

const Template: Story = (args) => <Activity {...args} />;
export const SActivity = Template.bind({});
