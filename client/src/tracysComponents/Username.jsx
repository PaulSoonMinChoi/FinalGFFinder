import React from 'react';
import axios from 'axios';

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.change = this.change.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  change(e) {
    e.preventDefault();
    console.log(this.state.username)
    this.props.username(this.state.username);
    this.props.handleClose();
  }




  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    const showUsernameModal = () => {
      if (this.props.show) {
        return (
          <div>
            <section className="username-modal-main">
              <div className="keepitpg">Changing your username? Cool! Just update below! Keep it PG</div>
              <br></br>

              <form className="updatePhoto" onSubmit={this.change} >
                <label>
                  NEW USERNAME:
                  <br></br>
                  <input type="text4" name="username" onChange={this.handleChange} />
                </label>
                <div className="submitPic">
                  <input type="submit" value="Submit" />
                </div>
              </form>
              <div className="ttclosepicture" onClick={this.props.handleClose}>I changed my mind...</div>
            </section>
            <div className={showHideClassName} onClick={this.props.handleClose}></div>
          </div>
        )
      } else {
        return(
          <div></div>
        )
      }
    }

    return(
      <div>
        {showUsernameModal()}
      </div>

    )
  }
}

export default Username;