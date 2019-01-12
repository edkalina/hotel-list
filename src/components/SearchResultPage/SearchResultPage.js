import React from "react";
import styled from "styled-components";
import { compose, withProps, withStateHandlers } from "recompose";

import data from "../../data";

import TuneIcon from "@material-ui/icons/Tune";

import HotelBox from "./HotelBox";
import Sidebar from "./Sidebar";

const SearchResultPage = ({ hotels, isFilterBarOpen, toggleFilterBar }) => (
  <Container>
    <Header>
      <FiltersButton onClick={toggleFilterBar}>
        <TuneIcon />
      </FiltersButton>
    </Header>
    <Content>
      <SidebarContainer open={isFilterBarOpen}>
        <Sidebar />
      </SidebarContainer>
      <HotelList>
        {hotels.map((hotel, index) => (
          <HotelBox key={index} hotel={hotel} />
        ))}
      </HotelList>
    </Content>
  </Container>
);

const enhance = compose(
  withStateHandlers(
    {
      isFilterBarOpen: false
    },
    {
      toggleFilterBar: ({ isFilterBarOpen }) => () => ({
        isFilterBarOpen: !isFilterBarOpen
      })
    }
  ),
  withProps(() => ({
    hotels: data.hotels
  }))
);

export default enhance(SearchResultPage);

const Container = styled.div`
  position: relative;
  background-color: #f7f8f9;
`;

const Content = styled.div`
  display: flex;
  padding: 1rem;
`;

const Header = styled.div`
  padding: 0.75rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HotelList = styled.div`
  flex: 1 1 auto;
`;

const FiltersButton = styled.button`
  border: 0 none;
  background: none transparent;
  font-size: 2rem;
  padding: 0;
`;

const SidebarContainer = styled.div`
  flex: 0 0 15rem;
  margin-right: 1rem;

  @media (max-width: 1023px) {
    display: ${p => (p.open ? "block" : "none")};
    position: absolute;
    top: 0
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: #f7f8f9;
    border-right: 1px solid #e1e2e3;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3)
  }
`;
