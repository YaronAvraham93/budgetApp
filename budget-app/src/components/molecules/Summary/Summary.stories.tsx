import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ISummaryProps } from '../../../models/index';
import Summary from './Summary';

export default {
  title: 'molecules/Summary',
  component: Summary,
} as Meta;

const Template: Story<ISummaryProps> = (args) => <Summary {...args} />;
export const SInvestment = Template.bind({});

SInvestment.args = {
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  revenue: '40,000$',
  SinceLastMonth: '+5.0%',
  titel: 'INVENSMENT',
  subtitel: 'Revnue',
  subtiteltwo: 'Since last month',
};
