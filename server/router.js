const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router
  .route('/signup')
  .post(controllers.signup)

router
  .route('/checkEmailExists')
  .get(controllers.checkSignUp)

router
  .route('/checkUserExists')
  .get(controllers.checkLogIn)


router
  .route('/updatePicture')
  .put(controllers.updatePicture)

router
  .route('/updateUsername')
  .put(controllers.updateUsername)

// router
//   .route('/checkMail')
//   .get(controllers.checkMail)
//   .delete(controllers.removeMail)

module.exports = router;