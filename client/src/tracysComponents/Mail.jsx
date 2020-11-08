import React from 'react';
import axios from 'axios';

class Mail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      friendmail: [],
      mail: [],
      mailSenders: [],
      friendSenders: [],
      show: true
    }
  };

  componentDidMount(){
    this.setState({id: this.props.id})
    let getid = {
      id: this.props.id
    }
    let msenders = [];
    let fsenders = [];
    let promises = [];
    let promises2 = [];

    axios.get('/getMail', {params: getid})
      .then((results) => {
        this.setState({ mail: results.data})

        for (let i = 0; i < results.data.length; i++) {
          promises.push(
            axios.get('/getUserInvites', {params : results.data[i]})
              .then(response => {
                msenders.push(response.data)
              })
          )
        }
        Promise.all(promises).then(() => console.log(msenders));
        this.setState({mailSenders: msenders})

      })
      .catch(err => console.log(err))


    axios.get('/getFriends', {params: getid})
      .then((res) => {
        this.setState({ friendmail: res.data })
        for (let j = 0; j < res.data.length; j++) {
          promises2.push(
            axios.get('/getUserFriendAdds', {params : res.data[j]})
              .then(response2 => {
                fsenders.push(response2.data)
              })
          )
        }
        Promise.all(promises).then(() => console.log(fsenders));
        this.setState({friendSenders: fsenders})

      })
      .catch(err => console.log(err))
  };


  acceptInv(senderId, recipientId){
    axios.post('/acceptInvites', {
      senderId: senderId,
      recipientId: recipientId
    })
      .then(() => {
        console.log('Accepted invite!')
        axios.delete('/getMail', { data: {
          senderId: senderId,
          recipientId: recipientId
        }
      })
      .then(() => console.log('Successfully removed inv'))
      })
     .catch(err => console.log(err))

     componentDidMount();
  }

  acceptFriend(senderId, recipientId){
    axios.post('/acceptFriend', {
      friendId: senderId,
      userId: recipientId
    })
      .then(() => {
        console.log('Friend added!')
        axios.delete('/getMail', { data: {
          senderId: senderId,
          recipientId: recipientId
        }
        })
        .then(() => console.log('Successfully removed inv'))
        })
       .catch(err => console.log(err))

       componentDidMount();
  }





    render() {
      const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

      const invlist = this.state.mailSenders.map((inv) =>
        <li className="licss">
          {inv[0].username}
          <button type="button" className="acceptInv" onClick={() => {this.acceptInv(inv[0].senderId, this.state.id)}}>
            Accept
          </button>
          <button type="button" className="declineInv" onClick={() => {this.declineInv(friend[0].senderId, this.state.id)}}>
            Decline
          </button>
        </li>
      );

      const friendlist = this.state.friendSenders.map((friend) =>
      <li className="licss">
        {friend[0].username}
        <button type="button" className="acceptFriend" onClick={() => {this.acceptFriend(friend[0].senderId, this.state.id)}}>
            Accept
          </button>
        <button type="button" className="declineFriend" onClick={() => {this.declineFriend(friend[0].senderId, this.state.id)}}>
            Decline
          </button>
      </li>
      );


      const showMailModal = () => {
        if (this.props.show) {
          return (
            <div>
              <section className="mail-modal-main">
                <div className="ttGameInvites">Game Invites:</div>
                <br></br>
                <div className="invlist">
                  {invlist}
                </div>
                <br></br>
                <div className="ttFriendInvites">Friend Invites:</div>
                <br></br>
                <div className="friendlist">
                  {friendlist}
                </div>

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

