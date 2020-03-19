import React from 'react';
import './Footer.css';

const FooterStyle = styled.div`
  background-color: black;
  padding: 3%;
  line-height: 1.4em;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy; Copyright NASA APOD 2020 <br /> website by: Evan Aspaas</p>
    </FooterStyle>
  )
}

export default Footer;