import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Content = ({title, explanation, copyright, dated}) => {
  return (
    <ContentStyles>
      <h3>{title}</h3>
      <p>{explanation}</p>
      <p>copyright: {copyright} {dated}</p>
    </ContentStyles> 
  )
}
export default Content;