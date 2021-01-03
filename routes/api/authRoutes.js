const passport = require('passport')
const router = require('express').Router()

const { login, signup } = require('../../controllers/api/authController')

router.post('/login', login)
router.post('/signup', signup)

module.exports = router
