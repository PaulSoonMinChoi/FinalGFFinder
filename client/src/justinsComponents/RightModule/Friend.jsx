import React from 'react';
import styled from 'styled-components';

  const FriendBlock = styled.div`
    width: 100%;
    display: in-line block;
    text-align: center;
  `;

  const StyledImage = styled.img`
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(34, 34, 34, 0.15);
    &:hover {
      cursor: pointer;
    }
  `;

  const FriendUserName = styled.h3`
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #FFF;
  `;

export default function Friend(props) {

  return (
    <FriendBlock onClick={() => {props.handleClickFriendDetail(props.friend.friendId)}}>
      <StyledImage src={props.friend.profilePicture} />
      <FriendUserName>{props.friend.username}</FriendUserName>
    </FriendBlock>
  )
}
