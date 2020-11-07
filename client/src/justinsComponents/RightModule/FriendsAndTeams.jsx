import React from 'react';
import Friends from './Friends.jsx';
import Teams from './Teams.jsx';
import styled from 'styled-components';
import axios from 'axios';

export default class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      teams: [],
      teamShow: false
    };
    this.getFriends = this.getFriends.bind(this);
    this.getTeams = this.getTeams.bind(this);
    this.handleClickFriendsOrTeamsButton = this.handleClickFriendsOrTeamsButton.bind(this);
  }

  //component did mount with get request for friends
  componentDidMount() {
    console.log(this.props.currentUser)
    this.getFriends(this.props.currentUser.id)
  }

  //get request for friends
  getFriends(userId) {
    axios.get(`/getFriends/${userId}`)
      .then((results) => {
        this.setState({
          friends: results.data
        })
      })
  }

  //get request for teams
  getTeams(userId) {
    axios.get(`/getTeams/${userId}`)
      .then((results) => {
        this.setState({
          teams: results.data
        })
      })
  }

  //handleclick for teams and friends button
  handleClickFriendsOrTeamsButton() {
    //switch teamShow in state
    const { teamShow } = this.state;
    if (!teamShow) {
      this.getTeams(this.props.currentUser.id);
      this.setState({
        teamShow: true
      });
    } else {
      this.getFriends(this.props.currentUser.id);
      this.setState({
        teamShow: false
      })
    }
  }

  render() {
    //styled components

    //conditionally render either teams or friends
    const { teamShow } = this.state;
    let teamsOrFriends;
    const { friends, teams } = this.state;
    if (teamShow) {
      teamsOrFriends = <Teams teams={teams}/>
    } else {
      teamsOrFriends = <Friends friends={friends}/>
    };

    let friendsOrTeamButton;
    if (teamShow) {
      friendsOrTeamButton = 'Friends'
    } else {
      friendsOrTeamButton = 'Teams'
    };

    return (
      <div>
        <button onClick={() => {this.handleClickFriendsOrTeamsButton()}}>{friendsOrTeamButton}</button>
        {teamsOrFriends}
      </div>
    )
  }
}