const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class UserServices {
  static async createSale(userName, pPassword, permissions) {
  await  bcrypt.hash(pPassword, saltRounds, async function (err, hash) {
      const password = hash;
      const userInfo = new UserModel({ userName, password, permissions });
      const user = await userInfo.save();
      return user;
    });
  }

  static async updateUser(id, permissions) {

    const updatedExpense = await UserModel.findByIdAndUpdate(id, {

      permissions:permissions,
    });

    return updatedExpense;
  }


    static async getUsers(){


        const userList =  await UserModel.find();
        return userList;

    }

  static async deleteUser(id) {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    return deletedUser;
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
    const rLength = await UserModel.find();

    const permissions = {
      product: true,
      inventory: true,
      expenses: true,
      sale: true,
      pref: true,
      user: true,
    };

    if (rLength.length == 0) {
      await this.createSale(userName, "123", permissions);
    }
    const rLength2 = await UserModel.find().length;
    return await UserModel.findOne({ userName });
  }
  static async checkHashPassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
  }
}

module.exports = UserServices;
