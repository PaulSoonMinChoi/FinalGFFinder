import React from 'react';
import styled from 'styled-components';


const CenteredModal = styled.div`
  position: fixed;
  width: 25%;
  height: 60%;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto;
  background: linear-gradient(180deg, #3B0069 0%, rgba(255, 255, 255, 0) 100%), #2853A5;
  box-shadow: inset 0px 4px 4px rgba(0,0,0,0.5);
  border-radius: 10px;
  z-index: 120;
  ::-webkit-scrollbar {display:none;}
  text-align: center;
  color: #FFF;
`;

const FriendContents = styled.div`
  margin: 5px;
`;

const FriendUserName = styled.h2`
  color: #E3A1FA;
`;

const CenteredFriendDetails = styled.div`
  position: fixed;
`;

const FlexBoxedDetails = styled.div`
  display: flex;
`;

const BlockedDetails = styled.div`
  width: 33%;
  display: block;
`;

const Buttons = styled.button`
  background: linear-gradient(180deg, #B747FC 46.21%, rgba(255, 255, 255, 0) 146.21%), #1C2331;
  border-radius: 65px;
  height: 32px;
  width: 68px;
  border: none;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
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

export default function FriendDetailModal(props) {

  let status;
  if (props.friendDetails[0].onlineStatus === 'online') {
    status = <p>Online!</p>
  } else {
    status = <p>Offline.</p>
  }

  return (
    <CenteredModal>
      <FriendContents>
        <FriendUserName>{props.friendDetails[0].username}'s Profile</FriendUserName>
        <CenteredFriendDetails>
          <img src={props.friendDetails[0].profilePicture}/>
          <FlexBoxedDetails>
            <BlockedDetails>
              <h3>Status:</h3>
              {status}
            </BlockedDetails>
            <BlockedDetails>
              <h3>Level:</h3>
              <p>{props.friendDetails[0].playertype}</p>
            </BlockedDetails>
            <BlockedDetails>
              <h3>Region:</h3>
              <p>{props.friendDetails[0].region}</p>
            </BlockedDetails>
          </FlexBoxedDetails>
          <h3>About {props.friendDetails[0].userName}:</h3>
          <p>{props.friendDetails[0].aboutMe}</p>
          <Buttons onClick={(e) => {props.handleClickFriendDetail(e)}}>Close</Buttons>
        </CenteredFriendDetails>
      </FriendContents>
    </CenteredModal>
  );
}