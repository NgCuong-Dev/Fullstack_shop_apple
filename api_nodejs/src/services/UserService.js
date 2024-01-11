const User = require("../models/UserModel");

const createUser = async (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;

    try {
      // Xác minh mật khẩu
      if (password !== confirmPassword) {
        reject({ message: "Password and confirmPassword do not match" });
        return;
      }

      // Tạo bản ghi User, chỉ lưu trữ mật khẩu đã được hash (chưa được thực hiện ở đây)
      const createdUser = await User.create({
        name,
        email,
        password,
        phone,
      });

      // Trả về thông tin user đã được tạo
      resolve(createdUser);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createUser,
};
