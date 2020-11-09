import React, { useEffect, useState } from 'react';
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

const Button = styled.button`
  background: linear-gradient(180deg, #B747FC 46.21%, rgba(255, 255, 255, 0) 146.21%), #1C2331;
  box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 65px;
  height: 32px;
  width: 68px;
  border: none;
  text-align: center;
  outline: none;
  margin-right: 10px;
  display: ${(props) => (props.active.length > 1 ? 'block' : 'none')};
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
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

const ButtonContainer = styled.div`
  padding-top: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBox = ({ currentGame, users, passedDownGame, currentUser }) => {

  const [chatInput, setChatInput] = useState('');
  const [usersChats, setUsersChats] = useState([]);
  const [randomChats, setrandomChats] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(faker.lorem.sentence());
    }
    setrandomChats(arr);
  }, [])

  const RoomName = () => {
    if (currentGame === '') {
      return "Global";
    } else {
      return currentGame;
    }
  }

  const handleChange = (e) => {
    setChatInput(e.target.value);
  }

  const addChats = (chat) => {
    let newArr = usersChats.slice(0);
    newArr.push(chat);
    setUsersChats(newArr);
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
                  <span>{randomChats[index]}</span>
                </ChatEntry>
              )
            }
          })}
          {usersChats.map((chatUser, index) => {
            return (
              <ChatEntry>
                <PlayerName>{chatUser.username}:</PlayerName>
                <span>{chatUser.chat}</span>
              </ChatEntry>
            )
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
      <SearchBarInput active={currentGame} onChange={(e) => handleChange(e)} value={chatInput} />
      <ButtonContainer>
        <Button active={currentGame} onClick={() => {addChats({username: currentUser.username, chat: chatInput}); setChatInput('');}}>Send</Button>
      </ButtonContainer>
    </ChatBoxContainer>
  )
}

export default ChatBox;
