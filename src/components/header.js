import React from 'react';
import Search from './Search';
import styled from 'styled-components';

const HeadStyles = styled.div`
  background-color: black;
  color: white;
  border: 5px solid #15418c;
  font-family: Nasalization;
`;

const Header = ({date, setDate}) => {
  return (
    <HeadStyles>
      <h1>NASA</h1>
      <p>"Astronomy Photo Of The Day"</p>
      <Search 
        date={date}
        setDate={setDate} 
      />
    </HeadStyles>
  )
}

export default Header;