const db = require('../../models')

function isInProgress(req, res, next) {
  if (db.FlightInProgress.findOne({ where: { id: req.user.id } })) {
    console.log('HOORAY')
    // if logged in, execute next middleware
    return next()
  }
  res.redirect('/login') // if not logged in, redirect to /login
}

module.exports = isInProgress
