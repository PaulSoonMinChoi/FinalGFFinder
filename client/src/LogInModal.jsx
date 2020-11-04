import React from 'react';

class LogInModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
    console.log(target.value);
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="log-in-modal-main">
          <div className="ttlogintitle">Login to find some friends!</div>
          <div className="logintext">
            <form>
              <label>
                Username:
                <br></br>
                <input type="text2" name="username" onChange={this.handleChange} />
              </label>
              <br></br>
              <label>
                Password:
                <br></br>
                <input type="text2" name="password" onChange={this.handleChange} />
              </label>
              <input type="submit2" value="Submit" />
            </form>

          </div>

          <div className="ttcloselogin" onClick={this.props.handleClose}>I changed my mind...</div>
        </section>
      </div>
    );
  }


};

export default LogInModal;