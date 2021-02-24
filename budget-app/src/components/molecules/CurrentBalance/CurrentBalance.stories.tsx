import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ICurrentBalancePops } from '../../../models/index';
import CurrentBalance from './CurrentBalance';

export default {
  title: 'molecules/CurrentBalance',
  component: CurrentBalance,
} as Meta;

const Template: Story<ICurrentBalancePops> = (args) => <CurrentBalance {...args} />;
export const SCurrentBalance = Template.bind({});

SCurrentBalance.args = {
  text: '50,000$',
  title: 'Current Balance',
};
