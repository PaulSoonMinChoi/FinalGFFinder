import React, { Component } from "react";
import axios from 'axios';
import AboutModal from './tracysComponents/AboutModal.jsx';
import SignUpModal from './tracysComponents/SignUpModal.jsx';
import LogInModal from './tracysComponents/LogInModal.jsx';
import ProfilePicture from './tracysComponents/ProfilePicture.jsx';
import Username from './tracysComponents/Username.jsx';
import Mail from './tracysComponents/Mail.jsx';
import AppBody from './justinsComponents/AppBody.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showSignUp: false,
      showLogIn: false,
      showPicture: false,
      isLoggedIn: false,
      showUsername: false,
      showMail: false,
      currentUser: {
        id: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        region: '',
        playertype: '',
        aboutMe: '',
        profilePicture: '',
        onlineStatus: '',
      }
    };
    this.showAboutModal = this.showAboutModal.bind(this);
    this.hideAboutModal = this.hideAboutModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.hideSignUpModal = this.hideSignUpModal.bind(this);
    this.showLogInModal = this.showLogInModal.bind(this);
    this.hideLogInModal = this.hideLogInModal.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changePicture = this.changePicture.bind(this);
    this.showPictureModal = this.showPictureModal.bind(this);
    this.hidePictureModal = this.hidePictureModal.bind(this);
    this.showUsernameModal = this.showUsernameModal.bind(this);
    this.hideUsernameModal = this.hideUsernameModal.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.showMailModal = this.showMailModal.bind(this);
    this.hideMailModal = this.hideMailModal.bind(this);
  };

  showAboutModal() {
    this.setState({ show: true });
    if (this.state.showLogIn === true) {
      this.setState({ showLogIn: false });
    }
    if (this.state.showSignUp === true) {
      this.setState({ showSignUp: false });
    }
  };

  hideAboutModal() {
    this.setState({ show: false });
  };

  showSignUpModal() {
    this.setState({ showSignUp: true });
    if (this.state.show === true) {
      this.setState({ show: false });
    }
    if (this.state.showLogIn === true) {
      this.setState({ showLogIn: false });
    }
    if (this.state.showPicture === true) {
      this.setState({ showPicture: false });
    }
  };

  hideSignUpModal() {
    this.setState({ showSignUp: false });
  };

  showLogInModal() {
    this.setState({ showLogIn: true });
    if (this.state.showSignUp === true) {
      this.setState({ showSignUp: false });
    }
    if (this.state.show === true) {
      this.setState({ show: false });
    }
    if (this.state.showPicture === true) {
      this.setState({ showPicture: false })
    }
  };

  hideLogInModal() {
    this.setState({ showLogIn: false });
  };

  showPictureModal() {
    this.setState({ showPicture: true });
    if (this.state.showSignUp === true) {
      this.setState({ showSignUp: false });
    }
    if (this.state.show === true) {
      this.setState({ show: false });
    }
    if (this.state.showLogIn === true) {
      this.setState({ showLogIn: false })
    }
  };

  hidePictureModal() {
    this.setState({ showPicture: false })
  };

  handleLogout(e) {
    this.setState({
      isLoggedIn: false
    })
  }

  showUsernameModal() {
    this.setState({ showUsername: true });
    if (this.state.showSignUp === true) {
      this.setState({ showSignUp: false });
    }
    if (this.state.show === true) {
      this.setState({ show: false });
    }
    if (this.state.showLogIn === true) {
      this.setState({ showLogIn: false })
    }
    if (this.state.showPicture === true) {
      this.setState({ showPicture: false })
    }
  }

  hideUsernameModal() {
    this.setState({ showUsername: false });
  }

  showMailModal() {
    this.setState({ showMail: true });
    if (this.state.showSignUp === true) {
      this.setState({ showSignUp: false });
    }
    if (this.state.show === true) {
      this.setState({ show: false });
    }
    if (this.state.showLogIn === true) {
      this.setState({ showLogIn: false })
    }
    if (this.state.showPicture === true) {
      this.setState({ showPicture: false })
    }
    if (this.state.showUsername === true) {
      this.setState({ showUsername: false })
    }
  }

  hideMailModal() {
    this.setState({ showMail: false });
  }


  logIn(val, info) {
    this.setState({
      isLoggedIn: val,
      currentUser: {
        id: info.id,
        firstname: info.firstname,
        lastname: info.lastname,
        username: info.username,
        email: info.email,
        password: info.password,
        region: info.region,
        playertype: info.playertype,
        aboutMe: info.aboutMe,
        profilePicture: info.profilePicture,
        onlineStatus: info.onlineStatus,
      }
     });
  }

  changePicture(pic) {
    this.setState({
      currentUser:{
        id: this.state.currentUser.id,
        firstname: this.state.currentUser.firstname,
        lastname: this.state.currentUser.lastname,
        username: this.state.currentUser.username,
        email: this.state.currentUser.email,
        password: this.state.currentUser.password,
        region: this.state.currentUser.region,
        playertype: this.state.currentUser.playertype,
        aboutMe: this.state.currentUser.aboutMe,
        profilePicture: pic,
        onlineStatus: this.state.currentUser.onlineStatus
      }
    })
    axios.put('/updatePicture', {
      email: this.state.currentUser.email,
      profilePicture: pic
    })
      .then(() => console.log('success'))
      .catch(err => console.log(err))

  }

  changeUsername(name) {
    let options = {
      id: this.state.currentUser.id,
      firstname: this.state.currentUser.firstname,
      lastname: this.state.currentUser.lastname,
      username: name,
      email: this.state.currentUser.email,
      password: this.state.currentUser.password,
      region: this.state.currentUser.region,
      playertype: this.state.currentUser.playertype,
      aboutMe: this.state.currentUser.aboutMe,
      profilePicture: this.state.currentUser.profilePicture,
      onlineStatus: this.state.currentUser.onlineStatus
    }
    this.setState({
      currentUser:{
        id: options.id,
        firstname: options.firstname,
        lastname: options.lastname,
        username: name,
        email: options.email,
        password: options.password,
        region: options.region,
        playertype: options.playertype,
        aboutMe: options.aboutMe,
        profilePicture: options.profilePicture,
        onlineStatus: options.onlineStatus
      }
    })
    axios.put('/updateUsername', {
      email: this.state.currentUser.email,
      username: name
    })
      .then(() => console.log('success'))
      .catch(err => console.log(err))
  }


  render() {
    const loggedin = this.state.isLoggedIn;
    return (
      <div>

        {loggedin ?
          (
            <div>
              <AboutModal className="modal" show={this.state.show} handleClose={this.hideAboutModal} onClick={this.showAboutModal} />

              <SignUpModal className="modal" show={this.state.showSignUp} handleClose={this.hideSignUpModal} onClick={this.showSignUpModal} />

              <ProfilePicture className="modal" show={this.state.showPicture} handleClose={this.hidePictureModal} onClick={this.showPictureModal} profilePicture={this.changePicture}/>

              <Username className="modal" show={this.state.showUsername} handleClose={this.hideUsernameModal} onClick={this.showUsernameModal} username={this.changeUsername}/>

              <Mail className="modal" show={this.state.showMail} handleClose={this.hideMailModal} onClick={this.showMailModal} id={this.state.currentUser.id}/>

              <div className="backdropapp">

              <div className="ttnav">
                <div className="ttlogo"></div>
                <img src="https://i.ibb.co/k9ST7HW/Copy-of-Copy-of-Untitled-1.gif" alt="Copy-of-Copy-of-Untitled-1" border="0" className="ttsearchbar" />
                <div className="ttmail" onClick={this.showMailModal}></div>
                <div className="ttAboutUs">
                  <a className="ttabout" onClick={this.showAboutModal}>About Us</a>
                </div>
                <div className="ttuser" onClick={this.showUsernameModal}>
                  <a className="ttuserprof">{this.state.currentUser.username}</a>
                </div>
                <img className="ttprofilepic" src={this.state.currentUser.profilePicture} onClick={this.showPictureModal} />
                <div className="ttlogout" onClick={this.handleLogout}>Log out</div>

              </div>
              <AppBody currentUser={this.state.currentUser}/>

              {/* <div className="appfooter">
                </div> */}

              </div>
            </div>
          )


            :

            (
            <div>
              <AboutModal className="modal" show={this.state.show} handleClose={this.hideAboutModal} onClick={() => {this.showAboutModal}} />

              <SignUpModal className="modal" show={this.state.showSignUp} handleClose={this.hideSignUpModal} onClick={this.showSignUpModal} />

              <LogInModal className="modal" show={this.state.showLogIn} handleClose={this.hideLogInModal} onClick={() => {this.showLogInModal}} isLoggedIn={this.logIn} />

              <div className="backdropapp">


              <div className="ttnav">
                <div className="ttlogo"></div>
                <img src="https://i.ibb.co/k9ST7HW/Copy-of-Copy-of-Untitled-1.gif" alt="Copy-of-Copy-of-Untitled-1" border="0" className="ttsearchbar" />
                <a className="fortnite" href="https://www.epicgames.com/fortnite/en-US/home">here</a>
                {/* <div className="ttmail"></div> */}
                <a className="league" href="https://na.leagueoflegends.com/en-us/">here</a>
                <a className="minecraft" href="https://www.minecraft.net/en-us">here</a>
                <a className="overwatch" href="https://playoverwatch.com/en-us/">here</a>
                <a className="apex" href="https://www.ea.com/games/apex-legends">here</a>
                <div className="ttAboutUs">
                  <a className="ttabout" onClick={this.showAboutModal}>About Us</a>
                </div>
                <div className="ttSignUp">
                  <a className="ttSign" onClick={this.showSignUpModal}>Sign Up</a>
                </div>
                <div className="ttlogin">
                  <a className="ttloginhere" onClick={this.showLogInModal}>Have an accout? Log in!</a>
                </div>
              </div>

              <AppBody currentUser={this.state.currentUser}/>

               {/* <div className="appfooter">
                </div> */}
            </div>
            </div>

    )
  }

      </div>
    )
  };
}

export default App;