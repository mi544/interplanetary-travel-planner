const db = require('../../models')

module.exports = {
  getAll: (req, res) => {
    db.Amenity.findAll().then((data) => res.json(data))
  },
  chooseOne: async (req, res) => {
    // assign id to amenityId
    const amenityId = req.params.id
    // update the object
    const result = await db.FlightInProgress.update(
      { AmenityId: amenityId },
      { where: { UserId: req.user.id } }
    )
    res.json(result)
  },
  deleteOne: async (req, res) => {
    //!!!!!!!!!! DELETE ROUTES!
    //!!!
    console.log('amenities delete')
    // get the planet passed to get the id
    // const rocketSequelize = await db.Rocket.findOne({ where: { name: req.params.rocket } });
    // assign id to parsedPlanetId
    // const parsedRocketId = rocketSequelize.dataValues.id;
    // update the object
    // await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });

    //return in a post the whole database to see what amenities are added

    res.end()
  },
  finalize: (req, res) => {
    // finalize amenities
    db.FlightInProgress.update(
      { amenitiesFinalized: 1 },
      { where: { UserId: req.user.id } }
    )
      .then((result) => res.json(result))
      .catch((err) => console.log(err))
  }
}
