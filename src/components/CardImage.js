import React from 'react';
import styled from 'styled-components';

const ImageContainer  = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const CardImage = ({image, title}) => {
  return (
    <ImageContainer>
      <img src={image} alt={title} />
    </ImageContainer>
  )
}

export default CardImage;