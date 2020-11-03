import React from 'react';

const LogInModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="log-in-modal-main">

        <div className="ttclose" onClick={handleClose}>x</div>
      </section>
    </div>
  );
};

export default LogInModal;