import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';
import { Selects } from '../../../containers/enums';
import { ITypographyProps } from '../../../models/index';

export default {
  title: 'atom/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ITypographyProps> = (args) => <Typography {...args}> Hello </Typography>;

export const Small = Template.bind({});
Small.args = {
  size: Selects.sm,
};

export const Medium = Template.bind({});
Medium.args = {
  size: Selects.md,
  color: 'yellow',
};

export const Large = Template.bind({});
Large.args = {
  size: Selects.lg,
};
