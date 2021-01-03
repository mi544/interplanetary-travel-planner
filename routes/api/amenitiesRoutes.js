const router = require('express').Router()

const {
  getAll,
  chooseOne,
  deleteOne,
  finalize
} = require('../../controllers/api/amenitiesController')

router.get('/', getAll)
router.post('/:id', chooseOne)
router.delete('/:id', deleteOne)
router.post('/finalize', finalize)

module.exports = router
