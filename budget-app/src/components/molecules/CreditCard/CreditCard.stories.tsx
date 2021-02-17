import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ICardProps } from '../../../models/index';
import CreditCard from './CreditCard';

export default {
  title: 'molecules/CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<ICardProps> = (args) => <CreditCard {...args} />;
export const SCreditCard = Template.bind({});
SCreditCard.args = {
  last4Digits: 5555,
  FirstName: 'Yaron',
  LastName: 'Avraham',
  year: '/21',
  month: 12,
  width: '100vw',
  height: '100vh',
};
