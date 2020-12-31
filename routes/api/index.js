const router = require('express').Router()

const authRoutes = require('./authRoutes')
const flightRoutes = require('./flightRoutes')

router.use('/auth', authRoutes)
router.use('/flight', flightRoutes)

module.exports = router
