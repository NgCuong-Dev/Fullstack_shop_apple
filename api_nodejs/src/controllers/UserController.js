const UserService = require("../services/UserService");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "error",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "error",
        message: "The input is email example :abc@gmail.com.",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "error",
        message: "The password is equal confirmPassword.",
      });
    } else if (password.length < 6) {
      return res.status(200).json({
        status: "error",
        message: "Password must be 6 characters or more.",
      });
    } else if (!/[A-Z]/.test(password)) {
      return res.status(200).json({
        status: "error",
        message: "Password should contain at least one uppercase letter.",
      });
    }
    console.log("isCheckEmail", isCheckEmail);
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
module.exports = {
  createUser,
};
