const express = require("express");
const userController = require("../controllers/UserController.js");
const router = express.Router();

router.post("/", userController.createUser);

module.exports = router;
