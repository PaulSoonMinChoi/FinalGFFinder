import React from 'react';
import styled from 'styled-components';

const TeamBlock = styled.div`
  width: 100%;
  display: in-line block;
  text-align: center;
`;

const TeamName = styled.h3`
  display: block;
  margin-top: 10px;
  margin-bottom: 2px;
  font-size: 16px;
  color: #FFF;
  &:hover {
    cursor: pointer;
  }
`;

const TeamNumber = styled.p`
  display: block;
  margin-top: 1px;
  font-size: 14px;
  color: #FFF;
`;

export default function Team(props) {


  return (
    <TeamBlock onClick={() => {props.handleClickTeamDetail(props.team.ID)}}>
      <TeamName>{props.team.teamName}</TeamName>
      <TeamNumber>Team Number: {props.team.teamId}</TeamNumber>
    </TeamBlock>
  )
}
