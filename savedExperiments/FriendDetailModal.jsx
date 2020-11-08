import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class FriendDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //method to add as friend (if not already friend)

  render() {
    //conditional render online status
    //conditional render friend request button
    //conditional render defriend?
    //conditional render team request button?
    let status;
    if (this.props.friendDetails[0].onlineStatus === 'online') {
      status = <p>Online!</p>
    } else {
      status = <p>Offline.</p>
    }
    return (
      <Modal show={this.props.show} size="xl" centered="true" className="modal">
        <Modal.Header>
          <Modal.Title>
            {this.props.friendDetails[0].userName}'s Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'maxHeight': 'calc(50vh - 100px)', 'overflowY': 'auto'}} >
          <img src={this.props.friendDetails[0].profilePicture}/>
          <h3>Status:</h3>
          {status}
          <h3>Level:</h3>
          <p>{this.props.friendDetails[0].userType}</p>
          <h3>Region:</h3>
          <p>{this.props.friendDetails[0].region}</p>
          <h3>About {this.props.friendDetails[0].userName}:</h3>
          <p>{this.props.friendDetails[0].aboutMe}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => {this.props.handleClickFriendDetail(e)}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}