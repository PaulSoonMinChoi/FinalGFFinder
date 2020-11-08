import React from 'react';

export default function TeamMember(props) {
  return (
    <div>
      <h3>{props.member.username}</h3>
      <p>Status: {props.member.onlineStatus}</p>
      <p>Region: {props.member.region}</p>
      <p>Level: {props.member.playertype}</p>
    </div>
  )
}
