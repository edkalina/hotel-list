import React from "react";
import styled from "styled-components";

import Star from "@material-ui/icons/Star";
import EmptyStar from "@material-ui/icons/StarBorder";

const range5 = [0, 1, 2, 3, 4];

const Stars = ({ filled, size = "2" }) => (
  <Container style={{ fontSize: `${size}rem` }}>
    {range5.map(index =>
      index < filled ? (
        <Star fontSize="inherit" />
      ) : (
        <EmptyStar fontSize="inherit" />
      )
    )}
  </Container>
);

export default Stars;

const Container = styled.div`
  display: flex;
`;
