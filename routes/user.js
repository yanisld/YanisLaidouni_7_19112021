const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOne);
router.put("/:id", userCtrl.updateOne);
router.delete("/:id", userCtrl.deleteOne);

module.exports = router;