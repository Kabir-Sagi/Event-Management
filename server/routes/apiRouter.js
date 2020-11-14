const express = require('express');
const router = express.Router();
const mongodb = require('../database/dbOperations');
const jwt = require('jsonwebtoken');

// JWT Token verification
let verifyToken = (request,response , next) => {
  if(!request.headers.authorization){
    return response.status(401).send('Unauthorized Request');
  }
  let token = request.headers.authorization.split(' ')[1];
  if(token === null){
    return response.status(401).send('Unauthorized Request');
  }
  let payload = jwt.verify(token,'ssshhh');
  if(!payload){
    return response.status(401).send('Unauthorized Request');
  }
  request.userId = payload.subject;
  next();
};

// get the free events
router.get('/events',(request,response) => {
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('events').find().toArray((err,records) => {
    if(err) throw  err;
    response.status(200).json(records);
  });
});

// get the pro events
router.get('/pro-events', verifyToken, (request,response) => {
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('proevents').find().toArray((err,records) => {
    if(err) throw  err;
    response.status(200).json(records);
  });
});

// upload events
router.post('/upload',(request,response) => {
  // get the form data
  let event = {
    name : request.body.name,
    url : request.body.url,
    date : request.body.date,
    type : request.body.type
  };
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  // for free events
  if(event.type === 'FREE'){
    db.collection('events').insertOne(event, (err,record) => {
      if(err) throw  err;
      response.status(200).json(record);
    });
  }
  // for pro events
  if(event.type === 'PRO'){
    db.collection('proevents').insertOne(event, (err,record) => {
      if(err) throw  err;
      response.status(200).json(record);
    });
  }
});


// register a user
router.post('/register',(request,response) => {
  // get the form data
  let user = {
    username : request.body.username,
    email : request.body.email,
    password : request.body.password
  };
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('users').insertOne(user, (err,record) => {
    if(err) throw  err;
    response.status(200).json({ msg : 'Registration is Success'});
  });
});

// login a user
router.post('/login',(request,response) => {
  // get fields from browser
  let user = {
    email : request.body.email,
    password : request.body.password
  };
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('users').findOne({email : user.email}, (err,record) => {
    if(err) throw  err;
    if(!record){
      response.status(401).json({msg : 'Invalid Email'});
    }
    else{
      if(record.password !== user.password){
        response.status(401).json({msg : 'Invalid Password'});
      }
      else{
      // Create a new token
        let payload = { subject : record._id};
        let token = jwt.sign(payload , 'ssshhh');
        response.status(200).json({token:token , username : record.username});
      }
    }
  });
});


module.exports = router;
