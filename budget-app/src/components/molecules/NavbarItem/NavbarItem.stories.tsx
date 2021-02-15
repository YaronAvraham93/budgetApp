import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { INavbarItem } from '../../../models/index';
import NavbarItem from './NavbarItem';
import { SCurrentBalance } from '../CurrentBalance/CurrentBalance.stories';

export default {
  title: 'molecules/NavbarItem',
  component: NavbarItem,
} as Meta;

const Template: Story<INavbarItem> = (args) => <NavbarItem {...args} />;
export const SNavbarItem = Template.bind({});
SCurrentBalance.args = {
  icon: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  text: 'Emil',
};
