import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IAvatar } from '../../../models/index';
import Avatar from './Avatar';

export default {
  title: 'atom/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<IAvatar> = (args) => <Avatar {...args} />;

export const SmallAvatar = Template.bind({});

SmallAvatar.args = {
  src: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
};
