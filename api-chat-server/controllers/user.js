// @ts-nocheck
const User = require("../models/user");

exports.searchUser = async (req, res, next) => {
  try {
    const { user } = req.params;
    const result = await User.find().lean();
    const updated = result.filter((res) => {
      return (
        res.firstName.toLowerCase().includes(user.toLowerCase()) ||
        res.email.includes(user.toLowerCase())
      );
    }).map(friend => {
      return {
        firstName: friend.firstName,
        lastName: friend.lastName,
        socketID: friend.socketID,
        _id: friend._id
      }
    });
    return res.status(200).json({
      result: updated
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    return res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.saveScocketID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    // console.log(user)
    const result = await User.findOne({ _id: user });
    // console.log(result)
    result.socketID = id;
    await result.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
