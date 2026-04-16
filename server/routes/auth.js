const { AuthController } = require("../controllers");
const { registerMiddleware, loginMiddleware } = require("../middleware");

const express = require("express");
const router = express.Router();
const authController = new AuthController();

router.post("/register", registerMiddleware, authController.register);
router.post("/login", loginMiddleware, authController.login);

module.exports = router;
