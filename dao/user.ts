const UserModel = require("../models/user");

export class UserDAO {
  async list() {
    // const data = UserModel.find(function (err: any, arr: any) {
    //   console.log(arr)
    //   return arr;
    // });

    const data = await UserModel.find();
    return data
  }
}
