import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    ${'' /* background-color: #94bdff; */}
    background-color: ${({ open }) =>
      open ? `#c0ddfc` : `#94bdff`};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.5s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0deg)`)};
    }
    &:nth-child(2) {
      ${'' /* transform: ${({ open }) =>
        open ? `translate/y(-300%)` : `translateY(0)`}; */}
      opacity: ${({ open }) => (open ? `0` : `1`)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0deg)`)};
    }
  }

  @media (min-width: 992px) {
    display:none;
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
      <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
  );
}
