const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const {ctrlWrapper} = require("../../helpers");

const {isValidId} = require("../../middlewares");

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));

// login
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

// logout
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;