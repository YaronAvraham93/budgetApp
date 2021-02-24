import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import UserInfro from './UserInfro';

export default {
  title: 'organisms/UserInfro',
  component: UserInfro,
} as Meta;

const Template: Story = (args) => <UserInfro {...args} />;
export const SUserInfro = Template.bind({});
