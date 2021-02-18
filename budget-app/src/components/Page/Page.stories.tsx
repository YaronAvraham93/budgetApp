import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Page from './Pages';

export default {
  title: 'Page/Page',
  component: Page,
} as Meta;

const Template: Story = () => <Page />;
export const SPage = Template.bind({});
