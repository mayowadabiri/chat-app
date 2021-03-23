const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/:user", userController.searchUser)

router.get("/:email", userController.getUser)

router.put("/socket/:id", userController.saveScocketID)


module.exports = router;
