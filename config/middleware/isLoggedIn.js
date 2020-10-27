function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // if logged in, execute next middleware
  }

  res.redirect("/login"); // if not logged in, redirect to /login
}

module.exports = isLoggedIn;
