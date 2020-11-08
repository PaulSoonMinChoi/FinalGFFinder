import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import ChatBox from './ChatBox.jsx';

const MainContainer = styled.div`
  width: 993px;
  height: 520px;
  background: linear-gradient(0deg, rgba(7, 1, 12, 0.86), rgba(7, 1, 12, 0.86)), rgba(40, 83, 165, 0.86);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
`;

const CenterModule = ({ currentUser }) => {

  const [users, setUsers] = useState([]);
  const [currentGame, setcurrentGame] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    return fetch('/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <MainContainer>
      <SearchBar users={users} currentGame={currentGame} setcurrentGame={setcurrentGame} currentUser={currentUser} />
      <ChatBox users={users} currentGame={currentGame} currentUser={currentUser} />
    </MainContainer>
  );
}


export default CenterModule;