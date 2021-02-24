import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IUserrofileProps } from '../../../models/index';
import UserProfile from './UserProfile';

export default {
  title: 'molecules/UserProfile',
  component: UserProfile,
} as Meta;

const Template: Story<IUserrofileProps> = (args) => <UserProfile {...args} />;
export const SUserProfile = Template.bind({});

SUserProfile.args = {
  avatarSrc: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  email: 'yaronavraham600@gmail.com',
  firstName: 'Yaron',
  lastName: 'Avraham',
};
