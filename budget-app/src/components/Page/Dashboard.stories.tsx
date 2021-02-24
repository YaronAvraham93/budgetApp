import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dashboard from './Dashboard';

export default {
  title: 'Page/Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story = () => <Dashboard />;
export const SDashboarde = Template.bind({});
