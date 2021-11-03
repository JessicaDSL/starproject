import React from 'react';

import CharacterCard from '../components/CharacterCard';

export default {
  title: 'Component/CharacterCard',
  component: CharacterCard,
};

const Component = (args) => <CharacterCard {...args} />;

export const Default = Component.bind({});

Default.args = {
  name: "Luke Skywalker",
  eyeColor: "blue",
  handleDelete: console.log
};
