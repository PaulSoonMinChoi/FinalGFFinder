import React from 'react';
import axios from 'axios'

class Mail extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  };

// componentDidMount(){
//   setInterval(getMail, 1000);
// }

// getMail(){
//   axios.get('/')
// }


    render() {
      const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

      const showMailModal = () => {
        if (this.props.show) {
          return (
            <div>
              <section className="mail-modal-main">
                <div className="ttGameInvites">Game Invites:</div>
                <br></br>


                <div className="ttFriendInvites">Friend Invites:</div>
                <br></br>



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
          {showMailModal()}
        </div>

      )
    }



  }


  export default Mail;

