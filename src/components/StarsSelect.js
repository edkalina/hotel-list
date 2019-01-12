import React from "react";
import styled from "styled-components";
import { compose, withStateHandlers } from "recompose";

import Star from "@material-ui/icons/Star";
import EmptyStar from "@material-ui/icons/StarBorder";

const range5 = [0, 1, 2, 3, 4];

const StarsSelect = ({ value, size = "2", onChange, hovered, onStarOver, onStarOut }) => {
  const filled = hovered > 0 ? hovered : value;

  return (
    <Container>
      {range5.map(index => (
        <StarButton
          onMouseEnter={() => onStarOver(index + 1)}
          onMouseLeave={() => onStarOut(index + 1)}
          onClick={() => onChange(index + 1)} style={{ fontSize: `${size}rem` }}
        >
          {index < filled ? (
            <Star fontSize="inherit" />
          ) : (
            <EmptyStar fontSize="inherit" />
          )}
        </StarButton>
      ))}
    </Container>
  );
};

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

const StarButton = styled.button`
  background: transparent none;
  border: 0 none;
  padding: 0;
  color: inherit;
  cursor: pointer;

  &:focus {
    outline: 0 none;
  }

  svg {
    display: block;
  }
`;