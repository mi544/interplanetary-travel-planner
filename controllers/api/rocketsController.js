const db = require('../../models')

module.exports = {
  getAll: (req, res) => {
    db.Rocket.findAll({
      include: [db.Company]
    }).then((data) => res.json(data))
  },
  chooseOne: async (req, res) => {
    // assign id to parsedRocketId
    const RocketId = req.params.id
    // update the object
    const result = await db.FlightInProgress.update(
      { RocketId: RocketId },
      { where: { UserId: req.user.id } }
    )
    res.json(result)
  }
}
