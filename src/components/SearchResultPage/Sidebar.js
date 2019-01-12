import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

import Stars from "../Stars";
import Input from "../Input";

const Sidebar = ({ hotel }) => (
  <React.Fragment>
    <FilterBlock>
      <Title>Stars</Title>
      <StarsFilter>
        <Stars filled={0} size={3} />
      </StarsFilter>
    </FilterBlock>
    <FilterBlock>
      <Title>Hotel Name</Title>
      <FilterContent>
        <Input icon={SearchIcon} block />
      </FilterContent>
    </FilterBlock>
    <FilterBlock>
      <Title>Features</Title>
      <FilterContent>
        <input type="checkbox" /> Has pool
      </FilterContent>
    </FilterBlock>
  </React.Fragment>
);

export default Sidebar;

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
