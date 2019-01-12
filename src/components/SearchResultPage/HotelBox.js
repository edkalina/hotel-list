import React from "react";
import styled from "styled-components";

import PlaceIcon from "@material-ui/icons/Place";

import Stars from "../Stars";

const HotelBox = ({ hotel }) => (
  <Container>
    <Content>
      <CoverCol>
        <CoverImg src={hotel.img} alt={hotel.name} title={hotel.name} />
      </CoverCol>
      <InfoCol>
        <Title>{hotel.name}</Title>
        <Location>
          <PlaceIcon fontSize="inherit" />
          {hotel.address}
        </Location>
        <Stars filled={hotel.rate} size={1.5} />
      </InfoCol>
    </Content>
    <AdditionalContent>
      <Price>${hotel.price.single}</Price>
      <DetailsButton>Details</DetailsButton>
    </AdditionalContent>
  </Container>
);

export default HotelBox;

const Container = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  overflow: hidden;
  border: 1px solid #c1c2c3;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  background-color: white;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const CoverCol = styled.div`
  flex: 0 0 auto;

  @media (max-width: 767px) {
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
`;

const CoverImg = styled.img`
  display: block;
  width: 250px;
  height: 200px;

  @media (max-width: 767px) {
    width: 125px;
    height: 100px;
  }
`;

const InfoCol = styled.div`
  flex: 1 1 auto;
  padding: 0.75rem 1rem;
`;

const Title = styled.h3`
  font-weight: normal;
  margin: 0;
  font-size: 1.5rem;
`;

const Location = styled.div`
  margin-bottom: 0.5rem;
`;

const AdditionalContent = styled.div`
  flex: 0 1 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-left: 1px solid #eaeaea;
  padding: 0.75rem;

  @media (max-width: 480px) {
    border-left: 0 none;
    border-top: 1px solid #eaeaea;

    flex-direction: row-reverse;
  }
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const DetailsButton = styled.button`
  border: 0 none;
  background: none;
  cursor: pointer;

  color: white;
  background-color: #18d;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
`;
