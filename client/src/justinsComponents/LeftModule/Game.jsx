import React from 'react';
import styled from 'styled-components';

const StyledGame = styled.div`
  border-radius: 9px;
  top: -9px;
  right: -9px;
  bottom: -9px;
  left: -9px;
  width: 20%;
`;

const StyledImageContainer = styled.div`
  width: 90%;
  margin-top: 5%;
  margin-bottom: 6px;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Game(props) {
  return (
    <StyledGame>
      <StyledImageContainer>
        <StyledImage src={props.game.coverImage} />
      </StyledImageContainer>
      <h3>{props.game.gameName}</h3>
    </StyledGame>
  )
}
