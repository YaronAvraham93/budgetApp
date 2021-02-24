import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ICreditCardProps } from '../../../models/index';
import CreditCard from './CreditCard';

export default {
  title: 'molecules/CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<ICreditCardProps> = (args) => <CreditCard {...args} />;
export const SCreditCard = Template.bind({});
SCreditCard.args = {
  last4Digits: 5555,
  firstName: 'Yaron',
  lastName: 'Avraham',
  year: '/21',
  month: 12,
};
