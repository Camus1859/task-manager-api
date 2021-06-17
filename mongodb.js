// CRUD create read update delete

const { MongoClient, ObjectID, ResumeToken } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    console.log('Connected correctly');

    const db = client.db(databaseName);

    db.collection('task')
      .deleteMany({
        description: 'brush teeth',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
