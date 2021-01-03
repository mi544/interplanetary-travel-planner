const router = require('express').Router()

const { getAll, chooseOne } = require('../../controllers/api/planetsController')

router.get('/', getAll)
router.post('/:id', chooseOne)

module.exports = router
