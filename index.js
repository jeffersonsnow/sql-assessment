var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connectionString = "postgres://Snow@localhost/assessbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
var db = app.get('db');
//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
// var db = massive.connect({connectionString : connString},
//   function(err, localdb){
//     db = localdb;
    // app.set('db', db);
    //
    // db.user_create_seed(function(){
    //   console.log("User Table Init");
    // });
    // db.vehicle_create_seed(function(){
    //   console.log("Vehicle Table Init")
    // });
//});
var controller = require('./controller');


app.post('/api/users', controller.createUser);
app.post('/api/vehicles', controller.createVehicle);
app.get('/api/users', controller.getAllUsers);
app.get('/api/vehicles', controller.getAllVehicles);
app.get('/api/users/:userId/vehiclecount', controller.getUserCars);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});

//module.exports = app;
