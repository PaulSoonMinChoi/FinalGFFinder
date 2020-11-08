import React from 'react';
import styled from 'styled-components';
import GamesList from './GamesList.jsx';


const CenteredModal = styled.div`
position: fixed;
width: 90%;
height: 50%;
top: 150px;
left: 50%;
transform: translateX(-50%);
overflow-y: auto;
background-color: #FFF;
z-index: 120;
`;

const CenteredGamesList = styled.div`
position: fixed;
`;

export default function GamesModal(props) {

  return (
    <CenteredModal>
      <h1>GAME TYPE: {props.type}</h1>
      <CenteredGamesList>
        <GamesList type={props.type} handleClickGamesModal={props.handleClickGamesModal} />
        <button onClick={(e) => {props.handleClickGamesModal(e)}}>Close</button>
      </CenteredGamesList>
    </CenteredModal>
  );
}