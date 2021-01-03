const db = require('../models')

module.exports = {
  findAmenities: (req, res) => {
    db.Amenity.findAll().then((data) => res.json(data))
  },

  findPlanets: (req, res) => {
    db.Planet.findAll().then((data) => res.json(data))
  },

  findRockets: (req, res) => {
    db.Rocket.findAll({
      include: [db.Company]
    }).then((data) => res.json(data))
  },

  findFlights: (req, res) => {
    if (!req.user) {
      res.status(401).end()
      return
    }

    if (req.user.id === Number(req.params.id)) {
      db.Flight.findAll({
        where: {
          UserId: Number(req.params.id)
        },
        include: [
          db.Planet,
          db.User,
          { model: db.Rocket, include: db.Company },
          db.Amenity
        ]
      })
        .then((data) => {
          console.log(data)
          res.json(data)
        })
        .catch((err) => {
          throw err
        })
    } else {
      res.status(401).end()
    }
  }
}
