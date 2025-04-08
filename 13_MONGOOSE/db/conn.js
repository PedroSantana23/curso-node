const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(
    "mongodb+srv://phsilvasantana:@mongoose-node.rxz0prx.mongodb.net/?retryWrites=true&w=majority&appName=mongoose-node"
  );
  console.log("Conectou!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
