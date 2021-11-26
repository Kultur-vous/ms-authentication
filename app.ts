import express from "express";
import mongoConnection from "./db/clientMongo";
const app = express();
const _mongoConnection = mongoConnection;
import { UserService } from "./service/user";

const usersService = new UserService();

require("dotenv").config();

app.get("/users", async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  const users = await usersService.getAllUsers();
  res.status(200).send(users);
});

app.listen(process.env.PORT, () => {
  console.log("Server app listening on port " + process.env.PORT);
});
