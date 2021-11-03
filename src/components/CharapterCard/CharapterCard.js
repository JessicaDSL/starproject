import React from 'react'

import { Container } from './styles'

const CharapterCard = ({name}) => {
  return (
    <Container>
      <h2>Name: {name}</h2>
      <button>DELETE</button>
    </Container>
  )
}

export default CharapterCard;
