/*
  // File name: config/express.js
  // Objective: Configs for the express server.
*/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');

// The express object.
const app = express();

// CORS Options
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

// Sets the body parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Sets the routes from the routes/index.js file.
app.use('/', routes);

//Define the validation middleware in different files or in this

//Handle all error types
app.use((err, req, res, next) => {
  req.log.error(err.errors);
  switch(err.constructor){

    //Put here the error types.

    default:
      const status = err.status || 500;
      res.status(status).json({message: err.message, errors: err.errors});
  }

})

// Export the express object. 
module.exports = app;
