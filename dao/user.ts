import User from "../interface/user";

const UserModel = require("../models/user");

export class UserDAO {
  async list() {
    return await UserModel.find();
  }

  async signUp(user: User) {
    const findUser = await UserModel.findOne({email: user.email})
     
    if(!findUser) {
      await UserModel.create(user, function(err: any) {
        if(err) return err
      })
      return user
    } else {
      return {error:"Cette utilisateur existe déjà"}
    }
  }

  async signIn(password: String, email: String) {
    const user = await UserModel.findOne({email: email, password: password})

    if(user) {
      return user
    } else {
      return {error: "Cette utilisateur n'existe pas "}
    }
  }
}
