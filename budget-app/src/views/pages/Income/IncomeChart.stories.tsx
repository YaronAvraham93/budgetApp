import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import IncomeChart from './IncomeChart';

export default {
  title: 'molecules/Income',
  component: IncomeChart,
} as Meta;

const Template: Story = (args) => <IncomeChart {...args} />;
export const SIncome = Template.bind({});
