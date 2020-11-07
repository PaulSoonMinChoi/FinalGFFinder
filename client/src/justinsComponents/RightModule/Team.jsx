import React from 'react';

export default function Team(props) {
  return (
    <div onClick={() => {props.handleClickTeamDetail(props.team.ID)}}>
      <h3>{props.team.teamName}</h3>
      <p>Team Number: {props.team.teamId}</p>
    </div>
  )
}
