import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavBar from './NavBar';

export default {
  title: 'organisms/NavBar',
  component: NavBar,
} as Meta;

const Template: Story = (args) => <NavBar {...args} />;
export const SSidebar = Template.bind({});
