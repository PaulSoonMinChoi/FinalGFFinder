import React from 'react';

const AboutModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const showAboutModal = () => {
    if (show) {
      return (
        <div>
          <div>
            <section className="modal-main">
              <div className="ttGif">
              <img className="gifimage" src="https://i.ibb.co/NpP1gst/Connect-with-us.gif" alt="Connect-with-us" border="0"/>
              </div>
            </section>
          </div>
          <div className={showHideClassName} onClick={handleClose}>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  return (
    <div>
      {showAboutModal()}
    </div>
  )
};

export default AboutModal