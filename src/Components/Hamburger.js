import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <BurgerContainer open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    &:nth-child(1) {
      transform: ${(props) => props.open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(100%)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open && "rotate(-45deg)"};
    }
  }
`;

export default Hamburger;
