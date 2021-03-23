// @ts-nocheck
const User = require("../models/user");
const {
  bcryptHash,
  bcryptCompare,
  sendMail,
  sign,
  errors,
} = require("../helpers");

exports.register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (firstName && lastName && email && password) {
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        throw errors("User already existed, login pls", 404);
      }
      const hash = await bcryptHash(password);
      const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      });
      const config = {
        to: email,
        subject: "Registration Successful",
        html: `<p>You have successfully registered on the chat app. Login to continue chatting with your friends</p>
        <p>ChatApp Team</p>
        `,
      };
      await sendMail(config);
      await user.save();
      return res.status(200).json({
        message: "Created Successfully",
        user: user._id,
      });
    } catch (error) {
      next(error);
    }
  } else {
    const error = errors("incomplete records", 400);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw errors("No user found with such email address", 404);
      }
      const doMatch = await bcryptCompare(password, user.password);
      if (!doMatch) {
        throw errors("Inccorrect password", 401);
      }
      const payload = {
        id: user._id,
        email: user.email,
        
      };
      const token = await sign(payload)
      
      return res.status(200).json({
        message: "Logged In successfully",
        token,
        id: user._id,
      });
    } catch (error) {
      next(error);
    }
  } else {
    const error = errors("incomplete records", 400);
    next(error);
  }
};
