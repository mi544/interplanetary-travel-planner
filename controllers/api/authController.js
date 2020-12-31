const db = require('../../models')
const passport = require('passport')
require('../../config/passport/passport.js')(passport, db.User)

module.exports = {
  signup: function () {
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/signup',
      failureFlash: true
    })
  },
  login: function () {
    passport.authenticate('local-login', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    })
  }
}
