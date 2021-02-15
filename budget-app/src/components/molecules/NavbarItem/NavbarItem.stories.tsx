import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { INavbarItem } from '../../../models/index';
import NavbarItem from './NavbarItem';

export default {
  title: 'molecules/NavbarItem',
  component: NavbarItem,
} as Meta;

const Template: Story<INavbarItem> = (args) => <NavbarItem {...args} />;
export const SNavbarItem = Template.bind({});
SNavbarItem.args = {
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  text: 'Emil',
};
