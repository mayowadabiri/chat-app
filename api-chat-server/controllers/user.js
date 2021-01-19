// @ts-nocheck
const User = require("../models/user");

exports.searchUser = async (req, res, next) => {
  console.log("reahec")
  try {
    const { user } = req.params;
    const result = await User.find().lean();
    const updated = result.filter((res) => {
      return (
        res.name.toLowerCase().includes(user.toLowerCase()) ||
        res.email.includes(user.toLowerCase())
      );
    });
    return res.status(200).json({
      result: updated,
    });
  } catch (error) {
    console.log(error)
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
