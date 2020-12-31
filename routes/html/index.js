const router = require('express').Router()
const {
  index,
  login,
  signup,
  logout,
  dashboard,
  expedition
} = require('../../controllers/html/htmlController')

router.get('/', index)
router.get('/login', login)
router.get('/signup', signup)
router.get('/logout', logout)
router.get('/dashboard', dashboard)
router.get('/expedition', expedition)

module.exports = router
