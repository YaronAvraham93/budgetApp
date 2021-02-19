import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IMainProps } from '../../../models/index';
import Main from './Main';

export default {
  title: 'organisms/Main',
  component: Main,
} as Meta;

const Template: Story<IMainProps> = (args) => <Main {...args} />;
export const SMain = Template.bind({});

SMain.args = {
  width: '100vw',
  height: '100vh',
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  revenue: '40,000$',
  SinceLastMonth: '+5.0%',
  titel: 'INVENSMENT',
  subtitel: 'Revnue',
  subtiteltwo: 'Since last month',
  last4Digits: 5555,
  FirstName: 'Yaron',
  LastName: 'Avraham',
  year: '/21',
  month: 12,
};
