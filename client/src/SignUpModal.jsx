import React from 'react';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playertype: '',
      fname: '',
      lname: '',
      username: '',
      password: '',
      region: '',
      aboutme: '',
    }
    this.handlePlayerTypeChange = this.handlePlayerTypeChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePlayerTypeChange(e){

  }
  handleRegionChange(e){

  }
  handleChange(e){
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });

  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="sign-up-modal-main">
          <div className="ttsignupTitle">Let's find you some friends!</div>
          <br></br>
          <div>
          <form classname="ttsignupform">
            <label>
              First Name:
              <br></br>
            <input classname="ttname" type="text" name="fname" onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              Last Name:
              <br></br>
            <input classname="ttname" type="text" name="lname" onChange={this.handleChange} />
            </label>

            <br></br>
            <label>
              Username:
              <br></br>
            <input classname="textinput" type="text" name="username" onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              Password:
              <br></br>
            <input classname="textinput" type="text" name="password" onChange={this.handleChange} />
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
            <input classname="inputtext" className="aboutme" type="text" name="aboutme" onChange={this.handleChange} />
            </label>
            <br></br>

            <input type="submit" value="Submit" />
          </form>
          </div>

          <div className="ttclosesignup" onClick={this.props.handleClose}>I changed my mind...</div>
        </section>
      </div>
    );
  };

  }


export default SignUpModal;