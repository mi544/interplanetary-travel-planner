const passport = require('passport')
const router = require('express').Router()

// const { login, signup } = require('../../controllers/api/authController')

router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })
)
router.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    failureFlash: true
  })
)

module.exports = router
