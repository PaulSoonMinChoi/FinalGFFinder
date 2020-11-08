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
      gameName: '',
    };
    this.handleGameSelect = this.handleGameSelect.bind(this);
  }

  handleGameSelect(gameName){
    this.setState({
      gameName: gameName
    })
  }

  render () {
    //styled components

    return (
      <div className="appcenter">
        <GameMenu handleGameSelect={this.handleGameSelect}/>
        <CenterModule currentUser={this.props.currentUser} passedDownGame={this.state.gameName}/>
        <FriendsAndTeams currentUser={this.props.currentUser}/>
      </div>
    )
  }
}