import React from 'react';
import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    size: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
    font: { control: { type: 'select', options: ['Helvetica', 'Avenir'] } },
  },
};

const Template = (args) => <Header {...args} />;

export const Size1 = Template.bind({});
Size1.args = {
  size: 1,
  font: 'Helvetica',
  children: 'Header Size 1',
};

export const Size2 = Template.bind({});
Size2.args = {
  size: 2,
  font: 'Helvetica',
  children: 'Header Size 2',
};

export const Size3 = Template.bind({});
Size3.args = {
  size: 3,
  font: 'Avenir',
  children: 'Header Size 3',
};

export const Size4 = Template.bind({});
Size4.args = {
  size: 4,
  font: 'Avenir',
  children: 'Header Size 4',
};

export const Size5 = Template.bind({});
Size5.args = {
  size: 5,
  font: 'Helvetica',
  children: 'Header Size 5',
};

export const Size6 = Template.bind({});
Size6.args = {
  size: 6,
  font: 'Helvetica',
  children: 'Header Size 6',
};
