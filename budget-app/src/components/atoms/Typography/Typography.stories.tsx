import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';
import { SelectSize } from '../../../containers/enums';
import { ITypography } from '../../../models/index';

export default {
  title: 'atom/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ITypography> = (args) => <Typography {...args}> Hello </Typography>;

export const Small = Template.bind({});
Small.args = {
  size: SelectSize.sm,
};

export const Medium = Template.bind({});
Medium.args = {
  size: SelectSize.md,
  color: 'yellow',
};

export const Large = Template.bind({});
Large.args = {
  size: SelectSize.lg,
};
