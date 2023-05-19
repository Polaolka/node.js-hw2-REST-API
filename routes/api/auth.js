const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate, validateSubscrBody} = require("../../middlewares");

const {schemas} = require("../../models/user");

const {ctrlWrapper} = require("../../helpers");

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));

// login
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

// logout
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

// PATCH /users
router.patch("/", authenticate, validateSubscrBody(schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription))

module.exports = router;