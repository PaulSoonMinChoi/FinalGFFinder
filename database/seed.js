const faker = require('faker');
const database = require('./index.js');

const numberOfTestRecords = 100;

const firstNames = ['Alex', 'Bruno', 'Casey', 'David', 'Evan', 'Fabricio', 'Gene', 'Hadrian', 'Igan', 'Jacob', 'Karl', 'Liam', 'Michael', 'Nestor', 'Owen', 'Patrick', 'Renault', 'Stephen', 'Travis', 'Uriel', 'Viktor', 'Wilson', 'Xander', 'Yllyn', 'Zephariah', 'Alanna', 'Beatrice', 'Carol', 'Denise', 'Ellen', 'Foxy', 'Greta', 'Hildabrun', 'Ingrid', 'Jaclyn', 'Kara', 'Lenore', 'Magda', 'Nanci', 'Ophelia', 'Pamela', 'Queenie', 'Rose', 'Seraphim', 'Tracy', 'Uticia', 'Valerie', 'Winona', 'Xena', 'Yemen', 'Zalla'];

const lastNames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

const regions = ['Bandle City', 'Bilgewater', 'Demacia', 'Ionia', 'Ixtal', 'Noxus', 'Piltover', 'Shadow Isles', 'Shurima', 'Targon', 'The Freljord', 'The Void', 'Zaun'];

const gameArr = ['League of Legends', 'BattleField', 'Among Us', 'Fortnite', 'Escape From Tarkov', 'Valorant'];

const currentStatus = ['offline', 'online'];

const userTypes = ['beginner', 'casual gamer', 'master'];

const imageUrls = [
  'https://i.imgur.com/otlQznY.jpg',
  'https://i.imgur.com/4JQx5Sr.jpg',
  'https://i.imgur.com/b6XVrXw.jpg',
  'https://i.imgur.com/7jmtqlV.jpg',
  'https://i.imgur.com/jtHNRuT.jpg',
  'https://i.imgur.com/HknGx6i.jpg',
  'https://i.imgur.com/TQDPnP2.jpg',
  'https://i.imgur.com/W9dVKfO.jpg',
  'https://i.imgur.com/lmh83wF.jpg',
  'https://i.imgur.com/Zsy5INv.jpg',
  'https://i.imgur.com/4Pbqvf6.jpg',
  'https://i.imgur.com/xM7CCuM.jpg',
  'https://i.imgur.com/Asdtvf6.jpg',
  'https://i.imgur.com/BiNi2B3.jpg',
  'https://i.imgur.com/sHfLcgF.jpg',
  'https://i.imgur.com/c5sTio1.jpg',
  'https://i.imgur.com/uNDwbg4.jpg',
  'https://i.imgur.com/SZCtbJl.jpg',
  'https://i.imgur.com/ANSijAF.jpg',
  'https://i.imgur.com/R6Ds6vr.jpg',
  'https://i.imgur.com/B45c3tK.jpg',
  'https://i.imgur.com/vshTFIr.jpg',
  'https://i.imgur.com/SXAmVcy.jpg',
  'https://i.imgur.com/5btUScT.jpg',
  'https://i.imgur.com/t97NDBj.jpg',
  'https://i.imgur.com/DclHjFh.jpg',
  'https://i.imgur.com/Atmn7fY.jpg',
  'https://i.imgur.com/IO352bd.jpg',
  'https://i.imgur.com/l46V7O5.jpg',
  'https://i.imgur.com/N6Z460e.jpg',
  'https://i.imgur.com/koBiU6E.jpg',
  'https://i.imgur.com/Rekg5ym.jpg',
  'https://i.imgur.com/AyUQ35p.jpg',
  'https://i.imgur.com/HUgeEZN.jpg',
  'https://i.imgur.com/t1pAQ0Y.jpg',
  'https://i.imgur.com/tuagZ8j.jpg',
  'https://i.imgur.com/uon0iZ7.jpg',
  'https://i.imgur.com/wwLjvBj.jpg',
  'https://i.imgur.com/hJ6KjzO.jpg',
  'https://i.imgur.com/jMt31Vx.jpg',
  'https://i.imgur.com/DGrFYht.jpg',
  'https://i.imgur.com/GwaFnsr.jpg',
  'https://i.imgur.com/yk2JZbM.jpg',
  'https://i.imgur.com/KQVloLJ.jpg',
  'https://i.imgur.com/bzf588c.jpg',
  'https://i.imgur.com/1UUgV9a.jpg',
  'https://i.imgur.com/VRZPyLh.jpg',
  'https://i.imgur.com/b7kavU0.jpg',
  'https://i.imgur.com/jHa8VlI.jpg',
  'https://i.imgur.com/9k4NbTH.jpg'
];

const gameTypes = ['Action', 'Adventure', 'Shooter', 'MMORPG'/*, 'RPG', 'Strategy', 'Puzzle', 'Sports', 'Racing', 'Fighting'*/];

const randomNumber = (number) => {
  return Math.floor(Math.random() * Math.floor(number));
};

const createUser = () => {
  const user = {};
  user.firstname = firstNames[randomNumber(firstNames.length)];
  user.lastname = lastNames[randomNumber(lastNames.length)];
  user.username = faker.internet.userName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.region = `${regions[randomNumber(regions.length)]}`;
  user.playertype = `${userTypes[randomNumber(userTypes.length)]}`;
  user.aboutMe = faker.lorem.sentences();
  user.profilePicture = faker.internet.avatar();
  user.onlineStatus = currentStatus[randomNumber(2)];
  user.currentGame = gameArr[randomNumber(6)];
  return user;
};

const createTeam = () => {
  const team = {};
  team.teamName = faker.name.jobDescriptor() + faker.name.jobType();
  team.leaderId = randomNumber(100) + 1;
  return team;
}

const createTeamMembership = () => {
  const teamMembership = {};
  teamMembership.teamId = randomNumber(numberOfTestRecords) + 1;
  teamMembership.teamMemberId = randomNumber(numberOfTestRecords) + 1;
  return teamMembership;
}

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

//create teams for database
const createTeamsForDatabase = () => {
  const teams = [];
  for (let i = 0; i < numberOfTestRecords; i++) {
    teams.push(createTeam());
  }
  return teams;
}

//create team member relationships for database
const createTeamMembershipsForDatabase = () => {
  const teamMembers = [];
  for (let i = 0; i < numberOfTestRecords * 5; i++) {
    teamMembers.push(createTeamMembership());
  }
  return teamMembers.filter((v, i, a) => a.findIndex(t => (t.teamId === v.teamId && t.teamMemberId === v.teamMemberId)) === i)
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
    const { firstname, lastname, username, email, password, region, playertype, aboutMe, profilePicture, onlineStatus, currentGame} = user;
    const queryString = `INSERT INTO users (firstname, lastname, username, email, password, region, playertype, aboutMe, profilePicture, onlineStatus, currentGame) VALUES ('${firstname}', '${lastname}', '${username}', '${email}', '${password}', '${region}', '${playertype}', '${aboutMe}', '${profilePicture}', '${onlineStatus}', '${currentGame}');`;
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

//insert teams
const insertTeams = () => {
  const teams = createTeamsForDatabase();
  teams.forEach((team) => {
    const { teamName, leaderId } = team;
    const queryString = `INSERT INTO teams (teamName, leaderId) VALUES ('${teamName}', ${leaderId});`;
    database.query(queryString);
  })
}

//insert teamMembers
const insertTeamMembers = () => {
  const teamMembers = createTeamMembershipsForDatabase();
  teamMembers.forEach((teamMember) => {
    const { teamId, teamMemberId } = teamMember;
    const queryString = `INSERT INTO teamMembers (teamId, teamMemberId) VALUES (${teamId}, ${teamMemberId});`;
    database.query(queryString);
  })
}

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
insertTeams();
insertTeamMembers();
insertGames();
insertUserGames();