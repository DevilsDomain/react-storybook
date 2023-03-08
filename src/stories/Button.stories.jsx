import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button',
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  type: 'primary',
  size: 'small',
  children: 'Small Primary Button',
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
  type: 'primary',
  size: 'large',
  children: 'Large Primary Button',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  type: 'secondary',
  size: 'small',
  children: 'Small Secondary Button',
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  type: 'secondary',
  size: 'large',
  children: 'Large Secondary Button',
};
