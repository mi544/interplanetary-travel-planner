require("dotenv").config();
const express = require("express");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const db = require("./models");
const PORT = process.env.PORT || 8080;
const app = express();

// load passport strategies
require("./config/passport/passport.js")(passport, db.User);

// urlencoded middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express static middleware setup
app.use(express.static("public"));

// handlebars middleware setup
app.set("views", "./views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// passport/connect-flash middleware setup
app.use(
  session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// making flash messages available to front-end
app.use(function (req, res, next) {
  res.locals.successMsg = req.flash("successMsg");
  res.locals.errorMsg = req.flash("errorMsg");
  res.locals.error = req.flash("error");
  next();
});

app.use(routes);

// sync w/database
db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log(`Server now running on http://localhost:${PORT}!`);
    });
  })
  .catch(err => {
    console.log(err, "Something went wrong with the db sync!");
  });
