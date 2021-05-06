import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import UserDetails from './UserDetails';

export default {
  title: 'organisms/UserDetails',
  component: UserDetails,
} as Meta;

const Template: Story = (args) => <UserDetails {...args} />;
export const SUserDetails = Template.bind({});
