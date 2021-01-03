const db = require('../../models')

module.exports = {
  getAll: (req, res) => {
    db.Rocket.findAll({
      include: [db.Company]
    }).then((data) => res.json(data))
  },
  chooseOne: async (req, res) => {
    console.log('timestamp post')
    console.log(req.body)
    // update the object
    await db.FlightInProgress.update(
      { timestamp: req.body.timestamp },
      { where: { UserId: req.user.id } }
    )
    res.redirect('/expedition')
  }
}
