import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Game from './Game.jsx';

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames(this.props.type)
  }

  getGames(type) {
    axios.get(`/gamesList/${type}`)
      .then((results) => {
        this.setState({
          games: results.data
        })
      })
  }

  render() {
    //styled components
    const StyledGameBlocks = styled.div`
      display: flex;
      flex-wrap: wrap;
    `;

    //mapped game blocks
    const { games } = this.state;
    const { handleClickGamesModal, handleGameSelect } = this.props;
    const GameBlocks = games.map((game) => {
      return <Game key={game.ID} game={game} handleClickGamesModal={handleClickGamesModal} handleGameSelect={handleGameSelect} />
    })

    return (
      <StyledGameBlocks>
        {GameBlocks}
      </StyledGameBlocks>
    );
  }
}