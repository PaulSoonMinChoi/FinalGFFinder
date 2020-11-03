import React, { Component } from "react";
import axios from 'axios';
import AboutModal from './AboutModal.jsx';
import SignUpModal from './SignUpModal.jsx';
import LogInModal from './LogInModal.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      showSignUp: false,
      showLogIn: false,
    };
    this.showAboutModal = this.showAboutModal.bind(this);
    this.hideAboutModal = this.hideAboutModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.hideSignUpModal = this.hideSignUpModal.bind(this);
    this.showLogInModal = this.showLogInModal.bind(this);
    this.hideLogInModal = this.hideLogInModal.bind(this);
  };

  showAboutModal(){
    this.setState({ show: true });
    if(this.state.showLogIn === true){
      this.setState({showLogIn: false});
    }
    if(this.state.showSignUp === true){
      this.setState({showSignUp: false});
    }
    console.log('clicked');
  };

  hideAboutModal(){
    this.setState({ show: false });
    console.log('clicked');
  };

  showSignUpModal(){
    this.setState({ showSignUp: true });
    if(this.state.show === true){
      this.setState({show: false});
    }
    if(this.state.showLogIn === true){
      this.setState({showLogIn: false});
    }
    console.log('clicked');
  };

  hideSignUpModal(){
    this.setState({ showSignUp: false });
    console.log('clicked');
  };

  showLogInModal(){
    this.setState({ showLogIn: true });
    if(this.state.showSignUp === true){
      this.setState({showSignUp: false});
    }
    if(this.state.show === true){
      this.setState({show: false});
    }
    console.log('clicked');
  };

  hideLogInModal(){
    this.setState({ showLogIn: false });
    console.log('clicked');
  };


  render() {
    return (
      <div>
        <AboutModal id="modal" show={this.state.show} handleClose={this.hideAboutModal} onClick={this.showAboutModal} />

        <SignUpModal id="modal" show={this.state.showSignUp} handleClose={this.hideSignUpModal} onClick={this.showSignUpModal} />

        <LogInModal id="modal" show={this.state.showLogIn} handleClose={this.hideLogInModal} onClick={this.showLogInModal} />


        <div className="ttnav">
          <div className="ttlogo"></div>
          <div className="ttsearchbar"></div>
          <div className="ttmail"></div>
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
      </div>
    )
  };
}

export default App;