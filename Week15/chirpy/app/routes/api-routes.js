// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var orm = require("../config/orm.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/chirps", function(req, res){
    orm.get('chirps', function(ret){
      res.json(ret);
    });
  });

  // Add a chirp
  app.post("/api/chirps", function(req, res){
    orm.postChirp('chirps', function(ret){

    })
  });
};
