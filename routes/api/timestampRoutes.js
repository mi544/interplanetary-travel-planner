const router = require('express').Router()

const { getAll, chooseOne } = require('../../controllers/api/timestampController')

router.get('/', getAll)
router.post('/', chooseOne)

module.exports = router
