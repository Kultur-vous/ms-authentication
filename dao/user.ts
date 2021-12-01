import User from "../interface/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

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

      const token = jwt.sign(
        { user_id: _user._id, email, hashPass },
        "shhhhh",
        { expiresIn: "2h" }
      );

      return { id: _user.id, firstName, token };
    } else {
      throw new Error("Cet utilisateur existe déjà");
    }
  }

  async signIn(password: String, email: String) {
    console.log(password);
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const verifyHash = await bcrypt.compare(String(password), user.password);
      const hashPass = user.password;
      if (verifyHash) {
        const token = jwt.sign(
          { user_id: user._id, email, hashPass },
          "shhhhh",
          { expiresIn: "2h" }
        );
        return { id: user._id, email, token };
      } else {
        throw new Error("Ce mot de passe n'est pas le bon");
      }
    } else {
      throw new Error("Cet utilisateur nexiste pas");
    }
  }
}
