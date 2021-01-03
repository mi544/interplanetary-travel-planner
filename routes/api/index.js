const router = require('express').Router()

const authRoutes = require('./authRoutes')
const flightsRoutes = require('./flightsRoutes')
const planetsRoutes = require('./planetsRoutes')
const amenitiesRoutes = require('./amenitiesRoutes')
const rocketsRoutes = require('./rocketsRoutes')
const timestampRoutes = require('./timestampRoutes')

router.use('/auth', authRoutes)
router.use('/flights', flightsRoutes)
router.use('/planets', planetsRoutes)
router.use('/amenities', amenitiesRoutes)
router.use('/rockets', rocketsRoutes)
router.use('/timestamp', timestampRoutes)

module.exports = router
