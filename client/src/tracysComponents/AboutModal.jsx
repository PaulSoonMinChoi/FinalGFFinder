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

              <div className="moreaboutus">
              <div className="pauls">
                <div className="ourPhotosDiv">
                <img className="ourPhotos" src="https://ca.slack-edge.com/T2SV1LBC6-U018Q4K9SJH-54fdc3290b2b-512"></img>
                </div>
                <div className="interestingbio">
                  Hi I am Paul I like Paul-like things and video games
                  Hi I am Paul I like Paul-like things and video games
                  Hi I am Paul I like Paul-like things and video games


                </div>
              </div>

              <div className="tracys">
              <div className="ourPhotosDiv">
                <img className="ourPhotos" src="https://ca.slack-edge.com/T2SV1LBC6-U018RMJRAAF-bf831d19171b-512"></img>
                </div>
                <div className="interestingbio">
                  Hi I am Tracy and my brain juice is at -5% and I am writing this at 2:27am.
                </div>
              </div>


              <div className="justins">
              <div className="ourPhotosDiv">
                <img className="ourPhotos" src="https://ca.slack-edge.com/T2SV1LBC6-U0165TTRDMY-49c3380fb57d-512"></img>
               </div>
                <div className="interestingbio">
                  Hi I am Justin and I am extremely beautiful and I look like I'm 16
                </div>
              </div>
              </div>

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