/*
  // File name: app.js
  // Objective: Main file for the app.
*/

// Require:
require('dotenv').config();
const app = require('./config/express');
const mongoose = require('mongoose');

// Sets the port.
let port = process.env.PORT || '4000';

// Starts the server.
app.listen(port, ()=>{
  console.log("Server starded...");
});
