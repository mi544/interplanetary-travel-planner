const db = require('../../models')

module.exports = {
  getAll: (req, res) => {
    db.Planet.findAll().then((data) => res.json(data))
  },
  chooseOne: async (req, res) => {
    try {
      // if no row exists for the user create one
      if (!(await db.FlightInProgress.findOne({ where: { UserId: req.user.id } }))) {
        await db.FlightInProgress.create({ UserId: req.user.id })
      }
      // get the planet passed to get the id
      const planetId = Number(req.params.id)
      // if Earth then ask again (no flights to Earth)
      if (
        (await db.Planet.findOne({ where: { id: planetId } })).dataValues.name === 'Earth'
      ) {
        res.redirect('/expedition')
        return
      }
      // update the object
      const result = await db.FlightInProgress.update(
        { PlanetId: planetId },
        { where: { UserId: req.user.id } }
      )
      res.json(result)
    } catch (err) {
      console.log(err)
      res.status(500).end()
    }
  }
}
