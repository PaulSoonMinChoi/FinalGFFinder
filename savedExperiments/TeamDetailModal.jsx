import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import TeamMember from './TeamMember.jsx';

export default class TeamDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    //map members
    const {teamDetails} = this.props;
    const teamMemberBlocks = teamDetails.map((member) => {
      return <TeamMember key={member.teamMemberId} member={member} />
    })

    return (
      <Modal show={this.props.show} size="xl" centered="true">
        <Modal.Header>
          <Modal.Title>
            Team Information For {this.props.teamDetails[0].teamName}:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'maxHeight': 'calc(50vh - 100px)', 'overflowY': 'auto'}} >
          <h3>Team Leader:</h3>
          <p>{this.props.leaderDetails[0].userName}</p>
          <h3>Members:</h3>
          {teamMemberBlocks}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {this.props.handleClickTeamDetail()}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}