import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2f3542;
  color: #ffffff;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Flashy News. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
