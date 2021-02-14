import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from './Icon';
import { IIconProps } from '../../../models/index';

export default {
  title: 'atom/Icon',
  component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const SmallIcon = Template.bind({});
SmallIcon.args = {
  width: '8vw',
  hight: '8vh',
  src: 'https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg',
};
