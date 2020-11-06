const faker = require('faker');
const database = require('./index.js');
const numberOfTestRecords = 100;
const regions = ['Bandle City', 'Bilgewater', 'Demacia', 'Ionia', 'Ixtal', 'Noxus', 'Piltover', 'Shadow Isles', 'Shurima', 'Targon', 'The Freljord', 'The Void', 'Zaun'];
const userTypes = ['beginner', 'casual gamer', 'master'];
const imageUrls = [
  'https://imgur.com/7jmtqlV',
  'https://imgur.com/jtHNRuT',
  'https://imgur.com/HknGx6i',
  'https://imgur.com/TQDPnP2',
  'https://imgur.com/W9dVKfO',
  'https://imgur.com/Zsy5INv',
  'https://imgur.com/lmh83wF',
  'https://imgur.com/xM7CCuM',
  'https://imgur.com/4Pbqvf6',
  'https://imgur.com/Asdtvf6',
  'https://imgur.com/BiNi2B3',
  'https://imgur.com/sHfLcgF',
  'https://imgur.com/R6Ds6vr',
  'https://imgur.com/ANSijAF',
  'https://imgur.com/SZCtbJl',
  'https://imgur.com/SXAmVcy',
  'https://imgur.com/vshTFIr',
  'https://imgur.com/B45c3tK',
  'https://imgur.com/c5sTio1',
  'https://imgur.com/uNDwbg4',
  'https://imgur.com/5btUScT',
  'https://imgur.com/t97NDBj',
  'https://imgur.com/N6Z460e',
  'https://imgur.com/l46V7O5',
  'https://imgur.com/IO352bd',
  'https://imgur.com/AyUQ35p',
  'https://imgur.com/Rekg5ym',
  'https://imgur.com/koBiU6E',
  'https://imgur.com/DclHjFh',
  'https://imgur.com/Atmn7fY',
  'https://imgur.com/yk2JZbM',
  'https://imgur.com/KQVloLJ',
  'https://imgur.com/bzf588c',
  'https://imgur.com/9k4NbTH',
  'https://imgur.com/jHa8VlI',
  'https://imgur.com/uon0iZ7',
  'https://imgur.com/tuagZ8j',
  'https://imgur.com/1UUgV9a',
  'https://imgur.com/VRZPyLh',
  'https://imgur.com/b7kavU0',
  'https://imgur.com/wwLjvBj',
  'https://imgur.com/hJ6KjzO',
  'https://imgur.com/jMt31Vx',
  'https://imgur.com/t1pAQ0Y',
  'https://imgur.com/HUgeEZN',
  'https://imgur.com/DGrFYht',
  'https://imgur.com/GwaFnsr',
  'https://imgur.com/b6XVrXw',
  'https://imgur.com/4JQx5Sr',
  'https://imgur.com/otlQznY'
];
const gameTypes = ['Action', 'Adventure', 'Shooter', 'MMORPG'/*, 'RPG', 'Strategy', 'Puzzle', 'Sports', 'Racing', 'Fighting'*/];
const randomNumber = (number) => {
  return Math.floor(Math.random() * Math.floor(number));
};
const createUser = () => {
  const user = {};
  user.userName = faker.name.findName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.region = `${regions[randomNumber(regions.length)]}`;
  user.userType = `${userTypes[randomNumber(userTypes.length)]}`;
  user.aboutMe = faker.lorem.sentences();
  user.profilePicture = faker.internet.avatar();
  user.onlineStatus = 'offline';
  return user;
};
const createFriendship = () => {
  const friendship = {};
  friendship.userId = randomNumber(numberOfTestRecords) + 1;
  const friendId = () => {
    const search = (userId) => {
      const testId = randomNumber(numberOfTestRecords) + 1;
      if (testId === userId) {
        return search(userId)
      } else {
        return testId
      }
    }
    return search(friendship.userId);
  }
  friendship.friendId = friendId();
  return friendship;
};
const createGame = () => {
  const game = {};
  game.gameName = faker.lorem.words();
  game.coverImage = imageUrls[randomNumber(imageUrls.length)];
  game.type = gameTypes[randomNumber(gameTypes.length)];
  game.description = faker.lorem.sentences();
  game.website = faker.internet.url();
  return game;
};
const createUserGame = () => {
  const userGame = {};
  userGame.userId = randomNumber(numberOfTestRecords) + 1;
  userGame.gameId = randomNumber(numberOfTestRecords) + 1;
  return userGame;
}
const createUsersForDatabase = () => {
  const users = [];
  for (let i = 0; i < numberOfTestRecords; i++) {
    users.push(createUser());
  }
  return users;
};
const createFriendshipsForDatabase = () => {
  const friendships = [];
  for (let i = 0; i < numberOfTestRecords * 5; i++) {
    friendships.push(createFriendship());
  }
  return friendships.filter((v,i,a) => a.findIndex(t => (t.userId === v.userId && t.friendId===v.friendId)) === i)
}
const createGamesForDatabase = () => {
  const games = [];
  for (let i = 0; i < numberOfTestRecords; i++) {
    games.push(createGame());
  }
  return games;
};
const createUserGamesForDatabase = () => {
  const userGames = [];
  for (let i = 0; i < numberOfTestRecords * 5; i++) {
    userGames.push(createUserGame());
  };
  return userGames.filter((v,i,a) => a.findIndex(t => (t.userId === v.userId && t.gameId===v.gameId)) === i);
};
const insertUsers = () => {
  const users = createUsersForDatabase();
  users.forEach((user) => {
    const { userName, email, password, region, userType, aboutMe, profilePicture, onlineStatus} = user;
    const queryString = `INSERT INTO users (userName, email, password, region, userType, aboutMe, profilePicture, onlineStatus) VALUES ('${userName}', '${email}', '${password}', '${region}', '${userType}', '${aboutMe}', '${profilePicture}', '${onlineStatus}');`;
    database.query(queryString);
  });
};
const insertFriendships = () => {
  const friendships = createFriendshipsForDatabase();
  friendships.forEach((friendship) => {
    const { userId, friendId } = friendship;
    const queryString = `INSERT INTO friendships (userId, friendId) VALUES (${userId}, ${friendId});`;
    database.query(queryString);
  });
};
const insertGames = () => {
  const games = createGamesForDatabase();
  games.forEach((game) => {
    const { gameName, coverImage, type, description, website } = game;
    const queryString = `INSERT INTO games (gameName, coverImage, type, description, website) VALUES ('${gameName}', '${coverImage}', '${type}', '${description}', '${website}');`;
    database.query(queryString);
  });
};
const insertUserGames = () => {
  const userGames = createUserGamesForDatabase();
  userGames.forEach((game) => {
    const { userId, gameId } = game;
    const queryString = `INSERT INTO userGames (userId, gameId) VALUES (${userId}, ${gameId});`;
    database.query(queryString);
  });
};
insertUsers();
insertFriendships();
insertGames();
insertUserGames();