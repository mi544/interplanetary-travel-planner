const db = require('../../models')

module.exports = {
  getAll: (req, res) => {
    if (!req.user) {
      res.status(401).end()
      return
    }

    db.Flight.findAll({
      where: {
        UserId: req.user.id
      },
      include: [db.Planet, db.User, { model: db.Rocket, include: db.Company }, db.Amenity]
    })
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).end()
      })
  },
  reset: async (req, res) => {
    // destroy the object
    await db.FlightInProgress.destroy({ where: { UserId: req.user.id } })
    res.redirect('/dashboard')
  }
}
