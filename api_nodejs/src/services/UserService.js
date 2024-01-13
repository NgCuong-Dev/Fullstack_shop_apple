const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { genneralAccesstoken, genneralRefreshToken } = require("./JwtService");

//lay tat ca user
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find().sort({ createdAt: -1, updatedAt: -1 });
      resolve({
        status: "OK",
        message: "Success",
        data: allUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};
//lay thong tin user
const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        _id: id,
      });
      if (user === null) {
        resolve({
          status: "ERROR",
          message: "The user is not defined",
        });
      } else {
        resolve({
          status: "OK",
          message: "Success",
          data: user,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

//dang ký
const createUser = async (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      const checkUser = await User.findOne({
        email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "The email is all ready",
        });
      }
      const hash = bcrypt.hashSync(password, 10);
      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
      });
      if (createUser) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
//đăng nhập
const loginUser = async (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;
    try {
      const checkUser = await User.findOne({
        email,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not define",
        });
      }
      //kiem tra mat khau
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "OK",
          message: "The password or user is incorrect",
        });
      }
      //access_token
      const access_token = await genneralAccesstoken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });
      //refresh_token
      const refresh_token = await genneralRefreshToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });
      resolve({
        status: "OK",
        message: "Success",
        access_token,
        refresh_token,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const updateUser = async (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log("checkuser", checkUser);
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not define",
        });
      }
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
      resolve({
        status: "OK",
        message: "Success",
        data: updateUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const deleteUser = async (id) => {
  try {
    const checkUser = await User.findOne({ _id: id });

    if (checkUser === null) {
      return {
        status: "OK",
        message: "The user is not defined",
      };
    }

    await User.findByIdAndDelete(id);

    return {
      status: "OK",
      message: "Delete user success!",
    };
  } catch (e) {
    reject(e);
  }
};

module.exports = {
  deleteUser,
  createUser,
  getAllUser,
  getDetailsUser,
  loginUser,
  updateUser,
};
