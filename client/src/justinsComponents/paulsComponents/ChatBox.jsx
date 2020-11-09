import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

//width: 280px;
const ChatBoxContainer = styled.div`
margin-top: 24px;
margin-right: 3.5%;
width: 35%;
height: 425px;
background: linear-gradient(0deg, rgba(7, 1, 12, 0.51), rgba(7, 1, 12, 0.51)), #4C7FE6;
box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
border-radius: 65px;
padding: 15px 30px 30px 30px;
`;

const LobbySign = styled.span`
  color: #E3A1FA;
  font-size: 20px;
  text-align: center;
  display: block;
  margin: 0;
`;

const PlayerName = styled.span`
  color: #E3A1FA;
  font-size: 15px;
  padding-right: 10px;
`;

const LoadingSign = styled.div`
  display: block;
  text-align: center;
  padding-top: 40px;
`;

const ChatsContainer = styled.div`
  padding-top: 10px;
`;

const ChatList = styled.ul`
  padding: 0;
  list-style-type: none;
  height: 270px;
  width: auto;
  overflow-y: auto;
`;

const ChatEntry = styled.li`
  padding: 5px;
`;

const SearchBarInput = styled.input`
  opacity: ${(props) => (props.active.length > 1 ? 1 : 0)};
  width: 98%;
  height: 30px;
  outline: none;
  color: white;
  border: none;
  padding-left: 10px;
  font-size: 12px;
  background: linear-gradient(0deg, rgba(7, 1, 12, 0.51), rgba(7, 1, 12, 0.51)), #4C7FE6;
  box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 65px;
  margin-top: 20px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  // box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;

  &:hover {
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #2098D1;
  background-color: #2098d1;
  color: white;
  }
  &:active {
    -webkit-animation-name: hvr-back-pulse;
  animation-name: hvr-back-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #2098D1;
  background-color: #2098d1;
  color: white;
  }
  &:focus {
    -webkit-animation-name: hvr-back-pulse;
  animation-name: hvr-back-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #2098D1;
  background-color: #2098d1;
  color: white;
  }
`;

const ChatBox = ({ currentGame, users }) => {

  const RoomName = () => {
    if (currentGame === '') {
      return "Global";
    } else {
      return currentGame;
    }
  }

  const Chats = () => {
    if (currentGame === '') {
      return (
        <LoadingSign>No game selected . . .</LoadingSign>
      )
    } else if (currentGame === 'League of Legends') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    } else if (currentGame === 'BattleField') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    } else if (currentGame === 'Among Us') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    } else if (currentGame === 'Fortnite') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    } else if (currentGame === 'Escape From Tarkov') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    } else if (currentGame === 'Valorant') {
      return (
        <ChatsContainer>
          <ChatList>
          {users.map((user, index) => {
            if (user.currentGame === currentGame) {
              return (
                <ChatEntry>
                  <PlayerName>{user.username}:</PlayerName>
                  <span>{faker.lorem.sentence()}</span>
                </ChatEntry>
              )
            }
          })}
          </ChatList>
        </ChatsContainer>
      )
    }
  }

  return (
    <ChatBoxContainer>
      <LobbySign>{RoomName()} Chat Room</LobbySign>
      {Chats()}
      <SearchBarInput active={currentGame} />
    </ChatBoxContainer>
  )
}

export default ChatBox;

            // <ChatEntry>
            // <PlayerName>Paul Choi:</PlayerName>
            // <span>Yo whats up guys anyone want to play?</span>
            // </ChatEntry>
            // <ChatEntry>
            // <PlayerName>Tracy Tea:</PlayerName>
            // <span>Does anyone have one more mid laner???</span>
            // </ChatEntry>
            // <ChatEntry>
            // <PlayerName>Justin Murakami:</PlayerName>
            // <span>I am a mid laner @Tracy Tea! Wanna add me?</span>
            // </ChatEntry>