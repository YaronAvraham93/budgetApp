import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ISidebarProps } from '../../../models/index';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<ISidebarProps> = (args) => <Sidebar {...args} />;
export const SSidebar = Template.bind({});

SSidebar.args = {
  width: '23vw',
  height: '94vh',
  CurrentBalancetText: '20,000$',
  CurrentBalancetTitel: 'Current Balance',
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
};
