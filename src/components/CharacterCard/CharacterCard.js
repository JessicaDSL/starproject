import React from "react";

import { Container } from "./styles";

const CharacterCard = ({ name, eyeColor, handleDelete }) => {
  return (
    <Container style={{ backgroundColor: eyeColor }}>
      <h2>
        Name: <span>{name}</span>
      </h2>
      <button onClick={() => handleDelete()}>DELETE</button>
    </Container>
  );
};

export default CharacterCard;
