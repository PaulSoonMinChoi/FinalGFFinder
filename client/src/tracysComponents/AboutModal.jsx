import React from 'react';

const AboutModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="ttGif">
        <img src="https://i.ibb.co/NpP1gst/Connect-with-us.gif" alt="Connect-with-us" border="0"/>
        </div>
        <div className="ttclose" onClick={handleClose}>close</div>
      </section>
    </div>
  );
};

export default AboutModal