import React from 'react';
import axios from 'axios';

class LogInModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      successOrNot: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmitLogin(e) {
    e.preventDefault();

    let options = {
      email: this.state.email,
      password: this.state.password,
    }

    axios.get('/checkUserExists', { params: options })
      .then((results) => {
        if (results.data.length === 0) {
          console.log('Incorrect login');
          this.setState({ successOrNot: false });
        } else {
          this.setState({ successOrNot: true });
          this.props.isLoggedIn(this.state.successOrNot,
            {
              id: results.data[0].id,
              firstname: results.data[0].firstname,
              lastname: results.data[0].lastname,
              username: results.data[0].username,
              email: results.data[0].email,
              password: results.data[0].password,
              region: results.data[0].region,
              playertype: results.data[0].playertype,
              aboutMe: results.data[0].aboutMe,
              profilePicture: results.data[0].profilePicture,
              onlineStatus: results.data[0].onlineStatus
            });
          this.props.handleClose();
        }})
      .catch(err => console.log(err))
  }



  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="log-in-modal-main">
          <div className="ttlogintitle">Login to find some friends!</div>
          <div className="logintext">
            <form className="loginform" onSubmit={this.handleSubmitLogin} >
              <label>
                Email:
                <br></br>
                <input type="text2" name="email" onChange={this.handleChange} />
              </label>
              <br></br>
              <label>
                Password:
                <br></br>
                <input type="text2" name="password" onChange={this.handleChange} />
                <br></br>
              </label>
              <div className="submit2">
              <input type="submit" value="Submit" />
              </div>
            </form>

          </div>

          <div className="ttcloselogin" onClick={this.props.handleClose}>I changed my mind...</div>
        </section>
      </div>
    );
  }


};

export default LogInModal;