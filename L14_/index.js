//l14
//CAP THEOREM->IMPORTANT
//SOLID //SDLC,STLC
// ------------------------
//L15
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'mongodb-g5';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  const dataAdd=await collection.insertMany([
    {
        name:"Prisha",
        rollno:123,
        class:"g5"
    },
    {
        name:"Neha",
        rollno:153,
        class:"g5"
    }
    
  ]);
  console.log(dataAdd);
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());