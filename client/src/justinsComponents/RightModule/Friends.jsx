import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Friend from './Friend.jsx';
import FriendDetailModal from './FriendDetailModal.jsx';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendDetails: [],
      friendDetailShow: false
    };
    this.getFriendDetails = this.getFriendDetails.bind(this);
    this.handleClickFriendDetail = this.handleClickFriendDetail.bind(this);
  }

  //get friend details
  getFriendDetails(id) {
    axios.get(`/getFriendDetails/${id}`)
      .then((results) => {
        this.setState({
          friendDetails: results.data,
          friendDetailShow: true
        })
      })
  }

  handleClickFriendDetail(id) {
    //if friendDetailShow false
    if (this.state.friendDetailShow === false) {
      //call get friend details
      this.getFriendDetails(id)
    } else {
      this.setState({
        friendDetailShow: false
      })
    }
  }

  render() {
    //styled components
    const StyledFriends = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    `;

    //conditional rendering
    const { friendDetails, friendDetailShow} = this.state;
    let friendDetailModal;
    if (friendDetailShow) {
      friendDetailModal = <FriendDetailModal show={friendDetailShow} friendDetails={friendDetails} handleClickFriendDetail={this.handleClickFriendDetail} />
    } else {
      friendDetailModal = null
    }

    //mapped friend blocks
    const { friends } = this.props;
    const friendsBlocks = friends.map((friend) => {
      return <Friend key={friend.ID} friend={friend} handleClickFriendDetail={this.handleClickFriendDetail}/>
    })

    return(
      <StyledFriends>
        {friendsBlocks}
        {friendDetailModal}
      </StyledFriends>
    )
  }
}