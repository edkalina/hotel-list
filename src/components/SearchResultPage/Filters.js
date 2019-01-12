import React from "react";
import styled from "styled-components";
import { compose, withHandlers } from "recompose";

import SearchIcon from "@material-ui/icons/Search";

import StarsSelect from "../StarsSelect";
import Input from "../Input";

const Filters = ({ filters, onStarsChange, onNameChange, onHasPoolChange }) => (
  <React.Fragment>
    <FilterBlock>
      <Title>Stars</Title>
      <StarsFilter>
        <StarsSelect value={filters.stars} size={3} onChange={onStarsChange} />
      </StarsFilter>
    </FilterBlock>
    <FilterBlock>
      <Title>Hotel Name</Title>
      <FilterContent>
        <Input icon={SearchIcon} block value={filters.name} onChange={onNameChange} />
      </FilterContent>
    </FilterBlock>
    <FilterBlock>
      <Title>Features</Title>
      <FilterContent>
        <input type="checkbox" checked={filters.hasPool} onChange={onHasPoolChange} /> Has pool
      </FilterContent>
    </FilterBlock>
  </React.Fragment>
);

const enhance = compose(
  withHandlers({
    onStarsChange: ({ onChange }) => (stars) => onChange('stars', stars),
    onNameChange: ({ onChange }) => (e) => onChange('name', e.target.value),
    onHasPoolChange: ({ onChange }) => (e) => onChange('hasPool', e.target.checked),
  })
);

export default enhance(Filters);

const FilterBlock = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const FilterContent = styled.div``;

const StarsFilter = styled.div`
  color: #18d;
`;
