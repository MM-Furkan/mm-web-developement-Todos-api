// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect The Mongodb Server");
  }
  console.log("Connect to Mongodb Server");

  // db.collection('Todos').find({_id : new ObjectID('5a0b0cfe15fda9595dc9b246')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos");
  // });

  db.collection('Users').find({name : "furkan"}).toArray().then((docs) => {
    // console.log(`Todos count ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos");
  });

  db.collection('Users').find({name : "furkan"}).count().then((docs) => {
    // console.log(`Todos count ${count}`);
    console.log("total number of record is : - "+JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos");
  });


  //db.close();
});
