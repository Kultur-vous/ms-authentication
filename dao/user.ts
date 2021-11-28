import User from "../interface/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserModel = require("../models/user");

export class UserDAO {
  async list() {
    return await UserModel.find();
  }

  async signUp(user: any) {
    const { firstName, lastName, email, password } = user;
    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      const hashPass = await bcrypt.hash(String(password), 10);

      const _user = await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPass,
      });

      const token = jwt.sign({ user_id: _user._id, email, hashPass }, "shhhhh");

      //const verify = jwt.verify(token, "shhhhh");

      return {id: _user.id, firstName, token};
    } else {
      return { error: "Cette utilisateur existe déjà" };
    }
  }

  async signIn(password: String, email: String) {
    const user = await UserModel.findOne({ email: email, password: password });

    if (user) {
      return user;
    } else {
      return { error: "Cette utilisateur n'existe pas " };
    }
  }
}
