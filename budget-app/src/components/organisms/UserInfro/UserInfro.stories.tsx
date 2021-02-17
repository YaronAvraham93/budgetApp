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
  height: '94vh',
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  titel: 'Payment History',
  hour: '14:30',
  date: '4 march',
  moneyTransactions: 'Deposit from ATL',
  money: '+2,500',
  img: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  emil: 'yaronavraham600@gmail.com',
  firstName: 'Yaron',
  lastName: 'Avraham',
};
