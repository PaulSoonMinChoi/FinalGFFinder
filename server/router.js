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

router
  .route('/getMail')
  .get(controllers.getMail)
  .delete(controllers.removeMail)

router
  .route('/getFriends')
  .get(controllers.getFriends)
  // .delete(controllers.removeFriends)

router
  .route('/getUserFriendAdds')
  .get(controllers.getUser)

router
  .route('/getUserInvites')
  .get(controllers.getInvites)

router
  .route('/acceptInvites')
  .post(controllers.acceptInvites)

router
  .route('/acceptFriend')
  .post(controllers.acceptFriend)

module.exports = router;