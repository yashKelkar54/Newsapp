import React from 'react';
import styled from 'styled-components';
import { FaNewspaper } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #2f3542;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

const NavbarTitle = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarIcon = styled(FaNewspaper)`
  margin-right: 10px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>
        <NavbarIcon />
        Flashy News
      </NavbarTitle>
    </NavbarContainer>
  );
};

export default Navbar;
