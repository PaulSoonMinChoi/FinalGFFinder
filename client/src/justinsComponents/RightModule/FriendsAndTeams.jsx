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
    this.getFriends(this.props.currentUser.id);
    console.log(this.props.currentUser.id);
    const currentUserId = this.props.currentUser.id;
    setInterval(
      () => {this.getFriends(currentUserId)},
      5000
    );
  }

  //get request for friends
  getFriends(userId) {
    console.log(userId);
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
    const Buttons = styled.button`
      background: linear-gradient(180deg, #B747FC 46.21%, rgba(255, 255, 255, 0) 146.21%), #1C2331;
      border-radius: 65px;
      height: 32px;
      width: 68px;
      border: none;
      outline: none;
      margin-left: 10px;
      margin-top: 10px;
      display: inline-block;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      transition-duration: 0.3s;
      transition-property: transform;
      &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        top: 100%;
        left: 5%;
        height: 10px;
        width: 90%;
        opacity: 0;
        background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
        /* W3C */
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform, opacity;
        transition-property: transform, opacity;
      }
      &:hover {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        cursor: pointer;
        background-color: #DFB4F9;
      }
      &:hover:before {
        opacity: 1;
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
      }
    `;

    const FriendOrTeamHeader = styled.h2`
      position: relative;
      height: 25px;
      width: 100%;
      margin: auto;
      vertical-align: middle;
      top: 5px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      /* identical to box height */

      display: block;
      align-items: center;
      text-align: center;
      letter-spacing: -0.015em;

      color: #E3A1FA;
    `;

    //conditionally render either teams or friends
    const { teamShow } = this.state;
    let teamsOrFriends;
    let teamsOrFriendsHeading;
    const { friends, teams } = this.state;
    if (teamShow) {
      teamsOrFriendsHeading = <FriendOrTeamHeader>MY TEAMS</FriendOrTeamHeader>
      teamsOrFriends = <Teams teams={teams}/>;
    } else {
      teamsOrFriendsHeading = <FriendOrTeamHeader>MY GFRIENDS</FriendOrTeamHeader>
      teamsOrFriends = <Friends friends={friends}/>;
    };

    let friendsOrTeamButton;
    if (teamShow) {
      friendsOrTeamButton = 'Show Friends'
    } else {
      friendsOrTeamButton = 'Show Teams'
    };

    return (
      <div className="appFriendsandTeams">
        <Buttons onClick={() => {this.handleClickFriendsOrTeamsButton()}}>{friendsOrTeamButton}</Buttons>
        {teamsOrFriendsHeading}
        {teamsOrFriends}
      </div>
    )
  }
}