import React from "react";

import { Container } from "./styles";
import { list } from "./content";
import CharapterCard from "../CharapterCard/CharapterCard";

const CharapterList = () => {
  return (
    <Container>
      {list.map((item, key) => (
        <CharapterCard key={key}
          name={item.name}
        />
      ))}
    </Container>
  );
};

export default CharapterList;
