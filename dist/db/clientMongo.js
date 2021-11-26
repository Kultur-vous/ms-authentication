"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
require('dotenv').config();
var mongoUri = "mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASS + "@users.pnxzv.mongodb.net/" + process.env.MONGO_DB + "?retryWrites=true&w=majority";
var uri = encodeURI(String(mongoUri));
var mongoConnection = mongoose.connect(uri);
exports["default"] = mongoConnection;
