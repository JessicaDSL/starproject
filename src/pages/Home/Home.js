import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles";
import CharacterList from "../../components/CharacterList";

const Home = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(`https://swapi.dev/api/people/`)
      .then((response) => {
        const person = response.data?.results?.map((item) => {
          const name = item?.name;
          const eyeColor = item?.eye_color;
          return { name, eyeColor };
        });
        setCharacter(person);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  function handleDelete(name) {
    const characterRemoved = character.filter((person) => person.name !== name);
    return setCharacter(characterRemoved);
  }

  return (
    <Container>
      <h1>Personagens StarWars</h1>
      <CharacterList character={character} handleDelete={handleDelete} />
    </Container>
  );
};

export default Home;
