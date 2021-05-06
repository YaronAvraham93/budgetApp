import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IUserDetails } from '../../../models/index';
import UserDetails from './UserDetails';

export default {
  title: 'molecules/UserDetails',
  component: UserDetails,
} as Meta;

const Template: Story<IUserDetails> = (args) => <UserDetails {...args} />;
export const SUserDetails = Template.bind({});

SUserDetails.args = {
  avatarSrc: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  email: 'yaronavraham600@gmail.com',
  firstName: 'Yaron',
  lastName: 'Avraham',
};
