import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6246ea;
  width: 100vw;
  height: 100px;
`;

const Heading = styled.h1`
  color: white;
  margin-left: 20px;
  text-decoration: underline;
  text-decoration-color: #e45858;
`;

function Navbar() {
  return (
    <Nav>
      <Heading>Simple Budget</Heading>
    </Nav>
  );
}

export default Navbar;
