const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genneralAccesstoken = (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "2d" }
  );
  return access_token;
};

const genneralRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "2d" }
  );
  return refresh_token;
};

const refreshTokenService = (token) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("token", token);
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "err",
            message: "The authentication",
          });
        }
        console.log("user", user);
        const { payload } = user;
        const access_token = await genneralAccesstoken({
          id: payload.id,
          isAdmin: payload?.isAdmin,
        });
        console.log("access_token", access_token);
        resolve({
          status: "OK",
          message: "Success",
          access_token,
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  refreshTokenService,
  genneralAccesstoken,
  genneralRefreshToken,
};
