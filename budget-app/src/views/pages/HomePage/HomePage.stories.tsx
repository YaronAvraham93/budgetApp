import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HomePage from './HomePage';

export default {
  title: 'Page/HomePage',
  component: HomePage,
} as Meta;

const Template: Story = () => <HomePage />;
export const SHomePage = Template.bind({});
