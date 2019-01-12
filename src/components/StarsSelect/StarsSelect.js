import React from "react";
import styled from "styled-components";
import { compose, withStateHandlers } from "recompose";

import StarButton from './StarButton';

const range5 = [0, 1, 2, 3, 4];

const StarsSelect = ({ value, size = "2", onChange, hovered, onStarOver, onStarOut }) => (
  <Container>
    {range5.map(index => (
      <StarButton
        key={index}
        num={index+1}
        filled={index < (hovered > 0 ? hovered : value)}
        size={size}
        onStarOver={onStarOver}
        onStarOut={onStarOut}
        onChange={onChange}
      />
    ))}
  </Container>
);

const enhance = compose(
  withStateHandlers({
    hovered: 0,
  }, {
      onStarOver: () => (index) => ({ hovered: index }),
      onStarOut: () => () => ({ hovered: 0 }),
    })
);

export default enhance(StarsSelect);

const Container = styled.div`
  display: flex;
`;
