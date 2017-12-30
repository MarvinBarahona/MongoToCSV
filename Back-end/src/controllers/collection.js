/*
  // File name: controllers/collection.js
  // Objective: Declares ths functions to be used in the collection's routes.
*/

// Require:
const mongo = require('mongodb').MongoClient;

// Function: db_url()
// Returns the database URL.
function db_url(){
  return process.env.DB_URL;
}

// Function: db_name()
// Returns the database name.
function db_name(){
  return process.env.DB_NAME;
}

// Function: list
// Gets all the collections metadata.
function list(request, response, next) {

  // Connects with the server.
  mongo.connect(db_url(), function(err, conn){
    // If there isn't errors.
    if(!err){
      // Set the database to be use.
      let myDB = conn.db(db_name());

      // Gets all the collections.
      myDB.listCollections().toArray(function(err, collections){
        // Sends the response and closes the connection.
        response.status(200).json(collections);
        conn.close();
      });
    }
  });
}

// Exports all the functions to be use in the routes. 
module.exports = {list};
