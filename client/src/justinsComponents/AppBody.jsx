import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameMenu from './LeftModule/GameMenu.jsx';
import FriendsAndTeams from './RightModule/FriendsAndTeams.jsx';
import CenterModule from './paulsComponents/CenterModule.jsx'

export default class AppBody extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    //styled components

    return (
      <div>
        <GameMenu />
        <CenterModule currentUser={this.props.currentUser}/>
        <FriendsAndTeams currentUser={this.props.currentUser}/>
      </div>
    )
  }
}