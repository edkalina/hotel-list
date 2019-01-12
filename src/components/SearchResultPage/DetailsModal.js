import React from 'react';
import styled from 'styled-components/macro';
import Modal from 'react-modal';

import PlaceIcon from "@material-ui/icons/Place";
import PoolIcon from "@material-ui/icons/Pool";

import Stars from "../Stars";

const DetailsModal = ({ hotel, onClose }) => (
  <StyledModal
    isOpen
    onRequestClose={onClose}
  >
    <Container>
      <Content>
        <TopContent>
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
            <Features>
              Features:
            <FeaturesIcons>
                {hotel.hasPool === 'true' && <PoolIcon fontSize="inherit" />}
              </FeaturesIcons>
            </Features>
          </InfoCol>
        </TopContent>
        <Description>{hotel.description}</Description>
        <PriceList>
          <PriceRow>Single: ${hotel.price.single}</PriceRow>
          <PriceRow>Double: ${hotel.price.double}</PriceRow>
          <PriceRow>Twin: ${hotel.price.twin}</PriceRow>
        </PriceList>
      </Content>
      <Buttons>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Buttons>
    </Container>
  </StyledModal>
);

export default DetailsModal;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 55rem;
  border: 1px solid #eaeaea;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background: white;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1023px) {
    max-width: 40rem;
  }

  @media (max-width: 767px) {
    height: 100%;
    width: 100%;
    max-width: unset;
    border: 0 none;
    box-shadow: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    flex: 1 1 auto;
  }
`;

const TopContent = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const CoverCol = styled.div`
  flex: 0 0 auto;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const CoverImg = styled.img`
  display: block;
  width: 250px;
  height: 200px;
`;

const InfoCol = styled.div`
  flex: 1 1 auto;
  padding: 0.75rem 1rem;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

const Title = styled.h3`
  font-weight: normal;
  margin: 0;
  font-size: 1.5rem;
`;

const Location = styled.div`
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  margin-top: 2rem;
`;

const Features = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.5rem;
  line-height: 1.5rem;
`;

const FeaturesIcons = styled.div`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const PriceList = styled.div`
  margin-top: 1rem;
`;

const PriceRow = styled.div``;

const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
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
