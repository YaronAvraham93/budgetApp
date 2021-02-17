import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IUserInfroProps } from '../../../models/index';
import UserInfro from './UserInfro';

export default {
  title: 'organisms/UserInfro',
  component: UserInfro,
} as Meta;

const Template: Story<IUserInfroProps> = (args) => <UserInfro {...args} />;
export const SUserInfro = Template.bind({});

SUserInfro.args = {
  width: '26vw',
  height: '100vh',
  img: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  emil: 'yaronavraham600@gmail.com',
  firstName: 'Yaron',
  lastName: 'Avraham',
};
