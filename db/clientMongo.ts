const mongoose = require("mongoose")
require('dotenv').config();
//const mongoUri =
  //`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@users.pnxzv.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  const mongoUri =
  `mongodb+srv://admin:CfQ8q6N59w6FHCt@users.pnxzv.mongodb.net/users?retryWrites=true&w=majority`;
  
const uri = encodeURI(String(mongoUri));
const mongoConnection = mongoose.connect(uri);

export default mongoConnection