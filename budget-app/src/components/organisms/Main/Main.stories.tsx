import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IMainProps } from '../../../models/index';
import Main from './Main';

export default {
  title: 'organisms/Main',
  component: Main,
} as Meta;

const Template: Story<IMainProps> = (args) => <Main {...args} />;
export const SMain = Template.bind({});

SMain.args = {
  width: '100vw',
  height: '100vh',
};
