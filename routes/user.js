const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOne);

module.exports = router;