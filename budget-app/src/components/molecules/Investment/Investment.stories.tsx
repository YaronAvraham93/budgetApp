import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IInvestmentProps } from '../../../models/index';
import Investment from './Investment';

export default {
  title: 'molecules/Investment',
  component: Investment,
} as Meta;

const Template: Story<IInvestmentProps> = (args) => <Investment {...args} />;
export const SInvestment = Template.bind({});

SInvestment.args = {
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  revenue: '40,000$',
  SinceLastMonth: '+5.0%',
  titel: 'INVENSMENT',
  subtitel: 'Revnue',
  subtiteltwo: 'Since last month',
};
