import React from 'react';
import styled from 'styled-components';

const StyledTeamMemberName = styled.p`
  font-weight: bold;
  margin-block-end: .5em;
`;

const StyledTeamMemberDetails = styled.p`
  margin-block-start: .5em;
  margin-block-end: .5em;
`;

export default function TeamMember(props) {
  return (
    <div>
      <StyledTeamMemberName>{props.member.username}</StyledTeamMemberName>
      <StyledTeamMemberDetails>- Status: {props.member.onlineStatus}</StyledTeamMemberDetails>
      <StyledTeamMemberDetails>- Region: {props.member.region}</StyledTeamMemberDetails>
      <StyledTeamMemberDetails>- Level: {props.member.playertype}</StyledTeamMemberDetails>
    </div>
  )
}
