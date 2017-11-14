// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect The Mongodb Server");
  }
  console.log("Connect to Mongodb Server");

  // db.collection('Todos').insertOne({
  //   text : 'Somthing to do',
  //   complete : false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to Insert Todos');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name : 'Hafi',
    age : 20,
    location : 'bhiwandi'
  }, (err, result) => {
    if (err){
      return console.log('Unable to Insert Tdos');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  db.close();
});
