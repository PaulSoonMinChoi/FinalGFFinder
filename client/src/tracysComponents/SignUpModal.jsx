import React from 'react';
import axios from 'axios';


class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      region: 'NA',
      playertype: '',
      aboutMe: '',
      profilePicture: 'https://i.ibb.co/ky1VHH6/Daco-4420061.png',
      onlineStatus: 'offline',
      currentGame: '',
      successOrNot: ''
    }
    this.handlePlayerTypeChange = this.handlePlayerTypeChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handlePlayerTypeChange(e) {
    this.setState({ playertype: e.target.value });
  }

  handleRegionChange(e) {
    this.setState({ region: e.target.value });
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let options = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      region: this.state.region,
      playertype: this.state.playertype,
      aboutMe: this.state.aboutMe,
      profilePicture: this.state.profilePicture,
      onlineStatus: this.state.onlineStatus,
      currentGame: this.state.currentGame
    }
    axios.get('/checkEmailExists', { params: options })
      .then((results) => {
        if (results.data.length > 0) {
          console.log('Email already exists');
          this.setState({ successOrNot: 'already exists :( Try again' });
        } else {
          console.log(results)
          console.log('Success');
          this.setState({ successOrNot: '' });
          axios.post('/signup', options)
            .then(() => {
              this.setState({ successOrNot: '' })
              window.location.reload(false);

            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    const showSignUpModal = () => {
      if (this.props.show) {
        return (
          <div>
              <section className="sign-up-modal-main">
                <div className="ttsignupTitle">Sign up to find some friends!</div>
                <br></br>
                <div className="annoyingform">
                  <form className="ttsignupform" onSubmit={this.handleSubmit}>
                    <label>
                      First Name:
                      <br></br>
                      <input className="ttname" type="abouttext" name="firstname" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                      Last Name:
                      <br></br>
                      <input className="ttname" type="abouttext" name="lastname" onChange={this.handleChange} />
                    </label>

                    <br></br>
                    <label>
                      Username:
                      <br></br>
                      <input className="textinput" type="abouttext" name="username" onChange={this.handleChange} />
                    </label>

                    <br></br>
                    <label>
                      Email: {this.state.successOrNot}
                      <br></br>
                      <input className="textinput" type="abouttext" name="email" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                      Password:
                      <br></br>
                      <input className="textinput" type="abouttext" name="password" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                      Region:
                    <select value={this.state.region} onChange={this.handleRegionChange}>
                        <option value="NA">NA</option>
                        <option value="UK">United Kingom</option>
                        <option value="LAN">LAN</option>
                        <option value="Asia">Asia</option>
                      </select>
                    </label>
                    <br></br>
                    <label>
                      Player Type:
                    <select value={this.state.playertype} onChange={this.handlePlayerTypeChange}>
                        <option value="casual">Casual</option>
                        <option value="hardcorerank">Hardcore Rank</option>
                        <option value="learning">Learning</option>
                      </select>
                    </label>
                    <br></br>
                    <label>
                      About Me:
                      <br></br>
                      <input className="inputtext" className="aboutme" type="abouttext" name="aboutMe" onChange={this.handleChange} />
                    </label>
                    <br></br>

                    <input type="submit" value="Submit" />
                  </form>
                  </div>

                <div className="ttclosesignup" onClick={this.props.handleClose}>I changed my mind...</div>
              </section>

              <div className={showHideClassName} onClick={this.props.handleClose}></div>
          </div>
        );
      } else {
        return (
          <div></div>
        )
      }
    }

    return (
      <div>
        {showSignUpModal()}
      </div>
    )
  };
};


export default SignUpModal;