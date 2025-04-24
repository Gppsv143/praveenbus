const express = require("express");
const { operatorSignup, operatorLogin } = require("../controllers/operatorAuthController");

const router = express.Router();

router.post("/signup", operatorSignup);
router.post("/login", operatorLogin);

module.exports = router;
