var app = require('./index');
var db = app.get('db');

module.exports = {
  getAllUsers: function(req, res, response){
    db.read_users([], function(err, response){
      if(err){
      console.log('error');
      res.json(err);
    }else{
      res.json(response);
    }
});
},
  getAllVehicles: function(req, res, response){
    db.read_vehicles([], function(err, response){
      if(err){
        console.log('error');
        res.json(err);
      }else{
        res.json(response);
      }
    });
  },
  createUser: function(req, res, response){
    var user = req.body;
    db.create_user([user.firstname, user.lastname, user.email], function(err, response){
      if(err){
        console.log('error');
        res.json(err);
      } else {
        res.json(response);
      }
    });
  },
  createVehicle: function(req, res, response){
    var vehicle = req.body;
    db.create_vehicle([vehicle.make, vehicle.model, vehicle.year, vehicle.ownerid], function(err, response){
      if(err){
        console.log('err');
        res.json(err);
      } else {
        res.json(response);
      }
    });
  },
  getUserCars: function(req, res, response){
      db.read_vehicle_count([req.body.userid], function(err, response){
        if(err){
          console.log('err');
          res.json(err);
        } else {
          res.json(response);
        }
      });
  }

};
