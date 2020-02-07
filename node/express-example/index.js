const express = require('express')
const app = express()
const port = 5000


app.use(express.json())


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://theo2:asdf123@cluster0-faxbh.mongodb.net/example?retryWrites=true&w=majority';
const dbName = 'example';
let dbClient


app.post('/user', (req, res) => {
  addUser(req.body)
  res.status(201).end()
})

app.get('/users', (req, res) => {


  let db = dbClient.db(dbName)
  const collection = db.collection('users')
  collection.find({}).toArray(function(err, users) {
    console.log(err)
    console.log(users)
    res.json(users)
  })
})


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error("Error", err);
  }
  else {
    console.log("Connected successfully to server");
    dbClient = client 
  }
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});

const addUser = (user) => {
  let db = dbClient.db(dbName)
  const collection = db.collection('users')
  collection.insert(user, function(req, err) {
    console.log('added', req)
  })
}