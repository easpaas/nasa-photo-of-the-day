import React from 'react';
import './CardContainer.css';
import CardImage from './CardImage';
import Content from './Content';
import styled from 'styled-components';

const CardStyles = styled.div`
  border: 2px solid #15418c;
  background-color: black;
  padding: 2%;
`;

const Card = ({data}) => {
  return (
    <CardStyles>
      <CardImage 
        image={data.url} 
        title={data.title}
      />
      <Content
        title={data.title}
        explanation={data.explanation}
        copyright={data.copyright}
        dated={data.date}
      />
    </CardStyles>
  );
}

export default Card;
