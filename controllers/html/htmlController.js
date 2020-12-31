const moment = require('moment')
const db = require('../../models')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
  index(req, res) {
    res.render('index')
  },
  signup(req, res) {
    // if user is logged in, redirect to /dashboard
    if (req.user) {
      req.flash('successMsg', "You're already logged in")
      return res.redirect('/dashboard')
    }

    res.render('signup')
  },
  login(req, res) {
    // if user is logged in, redirect to /dashboard
    if (req.user) {
      req.flash('successMsg', "You're already logged in")
      return res.redirect('/dashboard')
    }

    res.render('login')
  },
  async dashboard(req, res) {
    // if user is not logged in, redirect to /login
    if (!req.user) {
      return res.redirect('/login')
    }
    try {
      const data = await db.Flight.findAll({
        where: {
          UserId: Number(req.user.id)
        },
        include: [db.Planet, db.User, db.Rocket, db.Amenity]
      })

      res.render('dashboard', {
        flights: data
      })
    } catch (err) {
      console.error(err.message)
    }

    // res.render("dashboard", {
    //   email: req.user.email,
    //   user: JSON.stringify(req.user, null, 2)
    // });
  },
  async expedition(req, res) {
    try {
      const inProgress = await db.FlightInProgress.findOne({
        where: {
          UserId: req.user.id
        },
        include: [
          db.Planet,
          db.User,
          {
            model: db.Rocket,
            include: db.Company
          },
          db.Amenity
        ]
      })
      console.log(inProgress)
      if (!inProgress) {
        // Nothing -> Planet
        console.log('1st block')
        res.render('expedition/choose-planet', {})
        return
      } else if (!inProgress.dataValues.PlanetId) {
        // Something (but no Planet) -> Planet
        console.log('2nd block')
        res.render('expedition/choose-planet', {})
      } else if (inProgress.dataValues.PlanetId && !inProgress.dataValues.RocketId) {
        // Planet (but no Rocket) -> Rocket
        console.log('3rd block')
        // getting all available rockets
        const rockets = await db.Rocket.findAll()
        res.render('expedition/choose-rocket', {
          rockets
        })
      } else if (
        inProgress.dataValues.PlanetId &&
        inProgress.dataValues.RocketId &&
        !inProgress.dataValues.AmenityId
      ) {
        // Planet and Rocket (but not finalized Amenities) -> Amenities
        console.log('4th block')
        // getting all available amenities
        const amenities = await db.Amenity.findAll()
        res.render('expedition/choose-amenities', {
          amenities
        })
      } else if (
        inProgress.dataValues.PlanetId &&
        inProgress.dataValues.RocketId &&
        inProgress.dataValues.AmenityId &&
        !inProgress.dataValues.timestamp
      ) {
        // Planet and Rocket and Amenities finalized (but no Timestamp) -> Timestamp
        console.log('5th block')
        res.render('expedition/choose-timestamp', {})
      } else if (
        inProgress.dataValues.PlanetId &&
        inProgress.dataValues.RocketId &&
        inProgress.dataValues.AmenityId &&
        inProgress.dataValues.timestamp
      ) {
        // Planet and Rocket and Amenities finalized and Timestamp -> 1b
        console.log('5th block')

        const massagedData = {
          arrivalTimeEst: moment(inProgress.dataValues.timestamp, 'YYYY-MM-DD HH:mm:ss')
            .add(getRandomInt(21), 'hours')
            .add(getRandomInt(60), 'minutes')
            .add(getRandomInt(60), 'seconds')
            .format('YYYY-MM-DD HH:mm:ss'), //!w
          totalCost: getRandomInt(99999999999999), //!w
          flightNumber:
            inProgress.dataValues.Planet.dataValues.name.slice(0, 3).toUpperCase() +
            getRandomInt(1000),
          timestamp: inProgress.dataValues.timestamp,
          PlanetId: inProgress.dataValues.PlanetId,
          UserId: inProgress.dataValues.UserId,
          RocketId: inProgress.dataValues.RocketId,
          AmenityId: inProgress.dataValues.AmenityId
        }

        await db.Flight.create(massagedData)
        await db.FlightInProgress.destroy({
          where: {
            id: inProgress.dataValues.id
          }
        })

        res.render('expedition/success', {})
      }
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ msg: 'Failed' })
    }
  },
  logout(req, res) {
    req.logout()
    req.flash('successMsg', 'You successfully logged out')
    res.redirect('/dashboard')
  }
}
