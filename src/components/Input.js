import React from "react";
import styled from "styled-components";

const Input = ({ block = false, icon: Icon, ...restProps }) => (
  <Container block={block}>
    {Icon && (
      <IconContainer>
        <Icon fontSize="inherit" />
      </IconContainer>
    )}
    <InputEl hasIcon={!!Icon} {...restProps} />
  </Container>
);

export default Input;

const Container = styled.div`
  position: relative;
  display: ${p => (p.block ? "block" : "inline-block")};
`;

const InputEl = styled.input`
  display: block;
  border: 1px solid #a1a3a5;
  border-radius: 0.125rem;
  padding: 0.5rem;
  background-color: white;
  padding-left: ${p => (p.hasIcon ? "2rem" : "0.5rem")};
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: 0 none;
    border-color: rgb(48, 160, 220);
    box-shadow: 0 0 3px rgba(48, 160, 220, 0.7);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  font-size: 1rem;
  top: 0.5rem;
  left: 0.5rem;

  svg {
    display: block;
  }
`;
