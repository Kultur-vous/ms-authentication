const express = require("express")
import { UserService } from "./service/user";
import mongoConnection from "./db/clientMongo";
import User from "./interface/user"

const app = express();
const _mongoConnection = mongoConnection;
const usersService = new UserService();
require("dotenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//TODO

/* Port en production */
app.get('/', (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({mesage:"Page d'accueil"})
})

app.get("/users", async (req: Request, res: any) => {
  res.setHeader("Content-Type", "application/json");
  const users = await usersService.getAllUsers();
  res.status(200).send(users);
});

app.post("/sign-up", async (req: Request, res: any) => {
  try {
    const signup = await usersService.signUp(req.body);
    res.status(200).send(signup)
  } catch (e) {
    res.status(400).send(e)
  }
});

app.post("/sign-in", async (req: any, res: any) => {
  try  {
    const signin = await usersService.signIn(req.body.password, req.body.email)
    res.status(200).send(signin)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server app listening on port 3000");
});
