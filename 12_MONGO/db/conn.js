const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://phsilvasantana:@mongonode.6lvexeb.mongodb.net/?appName=mongonode";

const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect();
    console.log("Conectou!");
  } catch (err) {
    console.log(err)
  }
}
run();

module.exports = client;