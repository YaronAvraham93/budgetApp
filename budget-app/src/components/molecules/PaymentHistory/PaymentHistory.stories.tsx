import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IPaymentHistoryProps } from '../../../models/index';
import PaymentHistory from './PaymentHistory';

export default {
  title: 'molecules/PaymentHistory',
  component: PaymentHistory,
} as Meta;

const Template: Story<IPaymentHistoryProps> = (args) => <PaymentHistory {...args} />;
export const SPaymentHistory = Template.bind({});

SPaymentHistory.args = {
  icon: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
  titel: 'Payment History',
  hour: '14:30',
  date: '4 march',
  moneyTransactions: 'Deposit from ATL',
  money: '+2,500',
};
