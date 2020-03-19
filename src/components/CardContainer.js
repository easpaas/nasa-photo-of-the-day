import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid white;
  margin: 5%;
`;

const CardContainer = ({data}) => {
  return (
    <Container>
      <Card data={data} />
    </Container>
  )
}

export default CardContainer;