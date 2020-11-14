const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = 'events-booking';
let _db; // database connection object

let connectToDatabase = (callback) => {
  MongoClient.connect(uri).then((client) => {
    _db = client.db(dbName);
    console.log(`Connected to Mongo DB Successfully!!`);
    callback();
  }).catch((err) => {
    console.error(err);
    throw err;
  });
};

let getDBConnectionObject = () => {
  if(_db){
    return _db;
  }
  throw 'No Database Connection Found';
};

module.exports = {
  connectToDatabase,
  getDBConnectionObject
};
