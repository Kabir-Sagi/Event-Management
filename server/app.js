const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./database/dbOperations');
const apiRouter = require('./routes/apiRouter');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// configure body-parser
app.use(jsonParser);
app.use(urlencodedParser);

// configure cors
app.use(cors());

// configure api-router
app.use('/api',apiRouter);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (request,response) => {
  response.send(`<h2>Welcome to Events Booking App Express Server</h2>`);
});


// Create the database connection object, while server starts
mongodb.connectToDatabase(() => {
  app.listen(port,hostname,() => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
  });
});

