import React from "react";
import styled from "styled-components";

// Components
import { Container } from "../utils/reusableComponents";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <NavContainer>
      <Container flex>
        <p>crystal moon</p>
      </Container>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  background: transparent;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-top: 1.5rem;
    display: inline-block;
    font-weight: 500;
    border-bottom: 3px solid #fff;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
  }
`;

export default Navbar;
