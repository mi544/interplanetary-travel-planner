API
<!-- !!!! add /api/ -->
/login/ POST
/signup/ POST

/api/add/planet/:planetId
/api/add/rocket/:rocketId
/api/add/amenity/:amenityId
/api/delete/amenity/:amenityId
/api/amenity/finalize
/api/add/timestamp
/api/reset

<!-- !! -->

/api/auth/login/ POST
/api/auth/signup/ POST

/api/flight/planet/:id POST
/api/flight/rocket/:id POST
/api/flight/amenity/:id POST
/api/flight/amenity/:id DELETE
<!-- * /api/amenity/finalize POST -->
/api/flight/timestamp POST - adds timestamp
/api/flight/reset DELETE
<!-- !! -->

HMTL
/ GET - render index.hbs
/signup GET - render signup.hbs
/login GET- render login.hbs
/logout GET - logs out (?req.logout)
/dashboard  GET - render dashboard.hbs
/expedition GET - render expedition.hbs


