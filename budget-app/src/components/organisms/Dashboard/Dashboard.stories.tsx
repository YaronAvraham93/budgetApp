import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dashboard from './Dashboard';

export default {
  title: 'organisms/Dashboard.',
  component: Dashboard,
} as Meta;

const Template: Story = (args) => <Dashboard {...args} />;
export const SDashboard = Template.bind({});
