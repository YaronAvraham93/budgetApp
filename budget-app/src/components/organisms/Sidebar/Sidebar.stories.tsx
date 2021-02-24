import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = (args) => <Sidebar {...args} />;
export const SSidebar = Template.bind({});
