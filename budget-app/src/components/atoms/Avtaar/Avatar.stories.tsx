import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IAvatarProps } from '../../../models/index';
import { Selects } from '../../../containers/enums/index';
import Avatar from './Avatar';

export default {
  title: 'atom/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  size: Selects.lg,
  src: 'http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png',
  height: '15vh',
  width: '15vw',
};
