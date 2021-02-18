import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Income from './Income';

export default {
  title: 'molecules/Income',
  component: Income,
} as Meta;

const Template: Story = (args) => <Income {...args} />;
export const SIncome = Template.bind({});

SIncome.args = {
  height: '25vh',
  width: '25vw',
};
