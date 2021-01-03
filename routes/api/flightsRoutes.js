const router = require('express').Router()

const { getAll, reset } = require('../../controllers/api/flightsController')

router.get('/', getAll)
router.delete('/reset', reset)

module.exports = router
