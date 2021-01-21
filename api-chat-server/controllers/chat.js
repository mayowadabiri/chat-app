const Chat = require("../models/chat");
const User = require("../models/user");

exports.getChatWithUser = async (req, res, next) => {
  try {
    const { user_id, friend_id } = req.params;

    const chats = await Chat.find({
      sender_id: user_id,
      receiver_id: friend_id,
    });
    return res.status(200).json({
      chats,
    });
  } catch (error) {
      console.log(error)
    next(error);
  }
};
