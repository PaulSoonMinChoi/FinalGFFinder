import React from 'react';
import axios from 'axios';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: ''
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

    this.props.profilePicture(this.state.profilePicture);
    this.props.handleClose();
  }




  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div>
        <div className={showHideClassName}>
          <section className="picture-modal-main">
            <div className="keepitpg">Changing your profile picture? COOL! Just upload an html/jpg/png link below! Try to keep it PG</div>

            <form className="updatePhoto" onSubmit={this.change} >
              <label>
                HTML/JPG/PNG LINK:
                <br></br>
            <input type="text4" name="profilePicture" onChange={this.handleChange} />
              </label>
              <div className="submitPic">
                <input type="submit" value="Submit"  />
              </div>
            </form>
            <div className="ttclosepicture" onClick={this.props.handleClose}>I changed my mind...</div>
          </section>
        </div>
      </div>
    )
  }
}

export default ProfilePicture;