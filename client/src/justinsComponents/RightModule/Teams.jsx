import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Team from './Team.jsx';
import TeamDetailModal from './TeamDetailModal.jsx';

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamDetails: [],
      leaderDetails:[],
      teamDetailsShow: false
    };
    this.getTeamDetails = this.getTeamDetails.bind(this);
    this.handleClickTeamDetail = this.handleClickTeamDetail.bind(this);
  }

  getTeamDetails(teamId) {
    axios.all([
      axios.get(`/getTeamDetails/${teamId}`),
      axios.get(`/getTeamLeaderInfo/${teamId}`)
    ])
    .then(axios.spread((getTeamDetails, getTeamLeaderInfo) => {
      this.setState({
        teamDetails: getTeamDetails.data,
        leaderDetails: getTeamLeaderInfo.data,
        teamDetailsShow: true
      })
    }))
    .catch(err => console.error(err))
  }

  handleClickTeamDetail(teamId) {
    //if friendDetailShow false
    if (this.state.teamDetailsShow === false) {
      //call get friend details
      this.getTeamDetails(teamId)
    } else {
      this.setState({
        teamDetailsShow: false
      })
    }
  }


  render() {
    //styled components
    const StyledTeams = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    `;

    //conditional rendering of team detail modal
    const { teamDetails, leaderDetails, teamDetailsShow } = this.state;
    let teamDetailModal;
    if (teamDetailsShow) {
      teamDetailModal = <TeamDetailModal show={teamDetailsShow} teamDetails={teamDetails} leaderDetails={leaderDetails} handleClickTeamDetail={this.handleClickTeamDetail}/>
    } else {
      teamDetailModal = null
    }

    //mapped team names
    const { teams } = this.props;
    const teamBlocks = teams.map((team) => {
      return <Team key={team.ID} team={team} handleClickTeamDetail={this.handleClickTeamDetail}/>
    })

    return(
      <StyledTeams>
        {teamBlocks}
        {teamDetailModal}
      </StyledTeams>
    )
  }
}