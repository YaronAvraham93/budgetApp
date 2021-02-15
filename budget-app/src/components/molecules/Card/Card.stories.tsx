import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ICardProps } from '../../../models/index';
import Card from './Crad';

export default {
  title: 'molecules/Card',
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} />;
export const SCard = Template.bind({});
SCard.args = {
  last4Digits: 5555,
  FirstName: 'Yaron',
  LastName: 'Avraham',
  year: '/21',
  month: 12,
};
