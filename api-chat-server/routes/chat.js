const express = require("express");
const chatController = require("../controllers/chat");

const router = express.Router();


router.get("/:user_id/:friend_id", chatController.getChatWithUser);

module.exports = router;
