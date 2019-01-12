import React from "react";
import styled from "styled-components";
import { compose, withHandlers } from "recompose";

import Star from "@material-ui/icons/Star";
import EmptyStar from "@material-ui/icons/StarBorder";

const StarButton = ({ filled, size, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <Button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ fontSize: `${size}rem` }}
    >
      {filled ? (
        <Star fontSize="inherit" />
      ) : (
        <EmptyStar fontSize="inherit" />
      )}
    </Button>
  );
};

const enhance = compose(
  withHandlers({
    onMouseEnter: ({ num, onStarOver }) => () => onStarOver(num),
    onMouseLeave: ({ num, onStarOut }) => () => onStarOut(num),
    onClick: ({ num, onChange }) => () => onChange(num),
  })
);

export default enhance(StarButton);

const Button = styled.button`
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