const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class UserServices {
  static async createSale(userName, pPassword, permissions) {
    bcrypt.hash(pPassword, saltRounds, async function (err, hash) {
      const password = hash;
      const userInfo = new UserModel({ userName, password, permissions });
      const user = await userInfo.save();
      return user;
    });
  }
  static async signIn(userName, password) {

    const checkUser = await this.checkUser(userName);

    if (checkUser) {

     const result = await this.checkHashPassword(password, checkUser.password);

      return result;
    } else {
      return false;
    }
  }

  static async checkUser(userName) {
    return await UserModel.findOne({ userName });
  }
    static async checkHashPassword(password, hashPassword) {
                console.log(`Result:${password}`)

   return await bcrypt.compare(password, hashPassword);  }
}

module.exports = UserServices;
