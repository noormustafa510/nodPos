const { db } = require("../models/product.model");
const UserServices = require("../services/user.services");
// require('dotenv').config();

var jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  try {
    const { userName, password, permissions } = req.body;

    const savedUser = await UserServices.createSale(
      userName,
      password,
      permissions
    );
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    const result = await UserServices.signIn(userName, password);

    console.log(result);
    if (result) {
      const userE = await UserServices.checkUser(userName);

      var token = jwt.sign(
        { userName: userE.userName, password: userE.password },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).json({ token: token });
    } else {
      res.status(404).json({ msg: "Incorrect Credential" });
    }
  } catch (err) {
    res.status(404).json({ msg: err });

    console.log(err);
  }
};

exports.authenticateUserViaToken = async (req, res, next, apiUnit) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json({ msg: "Token invalid" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ msg: "Token invalid" });

    const dbUser = await UserServices.checkUser(user.userName);

    if (dbUser.userName == user.userName && user.password == dbUser.password) {
      if (dbUser.permissions[apiUnit]) {
        next();
      } else {
        return res.status(403).json({ msg: "Permission Denied" });
      }
    } else {
      return res.status(401).json({ msg: "Incorrect Credentials" });
    }
  });
};
