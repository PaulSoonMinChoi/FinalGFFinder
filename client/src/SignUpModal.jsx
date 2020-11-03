import React from 'react';

const SignUpModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="sign-up-modal-main">
        <div className="ttsignupTitle">Let's find you some friends!</div>

        <div className="ttclose" onClick={handleClose}>x</div>
      </section>
    </div>
  );
};

export default SignUpModal;