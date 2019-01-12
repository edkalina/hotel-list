import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

import StarsSelect from "../StarsSelect";
import Input from "../Input";

const Sidebar = ({ hotel }) => (
  <React.Fragment>
    <FilterBlock>
      <Title>Stars</Title>
      <StarsFilter>
        <StarsSelect value={1} size={3} onChange={val => console.log("star", val)} />
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
