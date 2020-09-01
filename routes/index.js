var router = require("express").Router();
var passport = require("passport");
var isLoggedIn = require("../config/middleware/isLoggedIn");
var authController = require("../controllers/authController.js");
var apiRoutes = require("./api");
const isInProgress = require("../config/middleware/isInProgress");
const db = require("../models");

router.get("/", function (req, res) {
  res.render("index");
});

// API routes (add files/routes within '/api' to run CRUD operations against your
// database and to query external APIs)...
router.use("/api", apiRoutes);

// auth routes
router.get("/signup", authController.signup);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/dashboard", isLoggedIn, authController.dashboard);
router.get("/expedition", isLoggedIn, isInProgress, authController.expedition);

router.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/dashboard",
  failureRedirect: "/signup",
  failureFlash: true
}));

router.post("/login", passport.authenticate("local-login", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true
}));

router.post("/api/add/planet/:planetId", async (req, res) => {
  try {
    console.log("planet post");
    // if no row exists for the user create one
    if (!await db.FlightInProgress.findOne({ where: { UserId: req.user.id } })) await db.FlightInProgress.create({ UserId: req.user.id });
    // get the planet passed to get the id
    const parsedPlanetId = Number(req.params.planetId);
    // if Earth then ask again (no flights to Earth)
    if ((await db.Planet.findOne({ where: { id: parsedPlanetId } })).dataValues.name === "Earth") {
      res.redirect("/expedition");
      return;
    }
    // update the object
    const result = await db.FlightInProgress.update({ PlanetId: parsedPlanetId }, { where: { UserId: req.user.id } });
    res.json(result);
  } catch (err) { console.log(err); }
});

router.post("/api/add/rocket/:rocketId", async (req, res) => {
  console.log("rocket post");
  // assign id to parsedRocketId
  const parsedRocketId = req.params.rocketId;
  // update the object
  const result = await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });
  res.json(result);
});

router.post("/api/add/amenity/:amenityId", async (req, res) => {
  console.log("amenities post");
  // assign id to parsedAmenityId
  const parsedAmenityId = req.params.amenityId;
  // update the object
  const result = await db.FlightInProgress.update({ AmenityId: parsedAmenityId }, { where: { UserId: req.user.id } });
  res.json(result);
});

router.delete("/api/delete/amenity/:amenityId", async (req, res) => {
  //!!!!!!!!!! DELETE ROUTES!
  //!!!
  console.log("amenities delete");
  // get the planet passed to get the id
  // const rocketSequelize = await db.Rocket.findOne({ where: { name: req.params.rocket } });
  // assign id to parsedPlanetId
  // const parsedRocketId = rocketSequelize.dataValues.id;
  // update the object
  // await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });


  //return in a post the whole database to see what amenities are added

  res.end();
});

router.post("/api/amenity/finalize", (req, res) => {
  console.log("finalize amenities post");
  // finalize amenities
  db.FlightInProgress.update({ amenitiesFinalized: 1 }, { where: { UserId: req.user.id } })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.post("/api/add/timestamp", async (req, res) => {
  console.log("timestamp post");
  console.log(req.body);
  // update the object
  const result = await db.FlightInProgress.update({ timestamp: req.body.timestamp }, { where: { UserId: req.user.id } });
  res.redirect("/expedition");
});



router.get("/api/reset", async (req, res) => {
  console.log("get reset");
  // destroy the object
  const result = await db.FlightInProgress.destroy({ where: { UserId: req.user.id } });
  res.redirect("/dashboard");
});

module.exports = router;