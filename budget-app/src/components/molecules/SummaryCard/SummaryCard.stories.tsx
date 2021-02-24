import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ISummaryCardProps } from '../../../models/index';
import SummaryCard from './SummaryCard';

export default {
  title: 'molecules/Summary',
  component: SummaryCard,
} as Meta;

const Template: Story<ISummaryCardProps> = (args) => <SummaryCard {...args} />;
export const SInvestment = Template.bind({});

SInvestment.args = {
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  revenue: '40,000$',
  SinceLastMonth: '+5.0%',
  title: 'INVENSMENT',
  subtitle: 'Revnue',
  subtiteltwo: 'Since last month',
};
