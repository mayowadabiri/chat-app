const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/search=:user", userController.searchUser)

router.get("/:email", userController.getUser)


module.exports = router;
