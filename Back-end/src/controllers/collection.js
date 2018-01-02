/*
  // File name: controllers/collection.js
  // Objective: Declares ths functions to be used in the collection's routes.
*/

// Require:
const mongo = require('mongodb').MongoClient;

// Function: list
// Gets all the collections metadata.
function list(request, response, next) {
  let db_url = request.body.db_url || process.env.DB_URL;
  let db_name = request.body.db_name || process.env.DB_NAME;

  // Connects with the server.
  mongo.connect(db_url, function(err, conn){
    // If there isn't errors.
    if(!err){
      // Set the database to be use.
      let myDB = conn.db(db_name);

      // Gets all the collections.
      myDB.listCollections().toArray(function(err, collections){
        // Sends the response and closes the connection.
        response.status(200).json(collections);
        conn.close();
      });
    }
  });
}

// Function: list
// Gets all the collections metadata.
function get(request, response, next) {
  let db_url = request.body.db_url || process.env.DB_URL;
  let db_name = request.body.db_name || process.env.DB_NAME;

  // Connects with the server.
  mongo.connect(db_url, function(err, conn){
    // If there isn't errors.
    if(!err){
      // Set the database to be use.
      let myDB = conn.db(db_name);

      // Sends the content of the collection
      myDB.collection(request.params.collection).find({}).toArray(function(err, content){
        // Sends the response and closes the connection.
        response.status(200).json(content);
        conn.close();
      });
    }
  });
}

// Exports all the functions to be use in the routes.
module.exports = {list, get};
