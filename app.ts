const express = require("express");
import { UserService } from "./service/user";
import mongoConnection from "./db/clientMongo";
const cors = require("cors");

const app = express();
const _mongoConnection = mongoConnection;
const usersService = new UserService();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(function (
  req: any,
  res: { setHeader: (arg0: string, arg1: string | boolean) => void },
  next: () => void
) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//TODO

/* Port en production */
app.get("/", (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ mesage: "Page d'accueil" });
});

app.get("/users", async (req: Request, res: any) => {
  res.setHeader("Content-Type", "application/json");
  const users = await usersService.getAllUsers();
  res.status(200).send(users);
});

app.post("/sign-up", async (req: Request, res: any) => {
  try {
    const signup = await usersService.signUp(req.body);
    res.status(200).send(signup);
  } catch (e) {
    console.log(e);
    res.status(400).send("Tu as déjà un compte. Connecte toi !");
  }
});

app.post("/sign-in", async (req: any, res: any) => {
  console.log(req.body);
  try {
    const signin = await usersService.signIn(req.body.password, req.body.email);
    res.status(200).send(signin);
  } catch (e) {
    console.log(e);
    res.status(400).send("L'email et/ou le mot de passe n'est pas bon.");
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server app listening on port 5000");
});
