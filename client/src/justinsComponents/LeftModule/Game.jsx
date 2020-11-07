import React from 'react';

export default function Game(props) {
  return (
    <div>
      <img src={props.game.coverImage} />
      <h3>{props.game.gameName}</h3>
    </div>
  )
}
