import React from "react";

import { Container } from "./styles";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = ({ handleDelete, character = [] }) => {
  return (
    <Container>
      {character.map((person) => (
        <CharacterCard
          key={person.name}
          name={person.name}
          eyeColor={person.eyeColor}
          handleDelete={() => handleDelete(person.name)}
        />
      ))}
    </Container>
  );
};

export default CharacterList;
