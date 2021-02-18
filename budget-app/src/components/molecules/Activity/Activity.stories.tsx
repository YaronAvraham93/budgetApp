import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Activity from './Activity';
import { IActivityProps } from '../../../models/index';

export default {
  title: 'molecules/Activity',
  component: Activity,
} as Meta;

const Template: Story<IActivityProps> = (args) => <Activity {...args} />;
export const SActivity = Template.bind({});

SActivity.args = {
  height: '95vw',
  width: '75vh',
};
