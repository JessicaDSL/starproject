import React from "react";

import CharacterList from "../components/CharacterList";

export default {
  title: "Component/CharacterList",
  component: CharacterList,
};

const character = [
  {
    name: "Luke Skywalker",
    eyeColor: "blue",
  },
  {
    name: "C-3PO",
    eyeColor: "yellow",
  },
  {
    name: "R2-D2",
    eyeColor: "red",
  },
];

const Component = (args) => <CharacterList {...args} />;

export const Default = Component.bind({});

Default.args = {
  character,
  handleDelete: console.log,
};
