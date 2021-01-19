// @ts-nocheck
const jwt = require("jsonwebtoken");

const { pbk, pvt } = require("../constants/index");
const {errors} = require("./error")

const config = {
  pbk,
  pvt,
  options: {
    expiresIn: "24hr",
    algorithm: "RS256",
  },
};

exports.sign = async (payload) => {
  try {
    const token = await jwt.sign(payload, config.pvt, config.options);
    return token;
  } catch (error) {
    console.log(error);
    throw errors("Error generating token", 500)
  }
};

exports.verifyToken = async (token) => {
  try {
    const signatory = await jwt.verify(
      token,
      config.pbk,
      config.options.algorithm
    );
    return signatory;
  } catch (error) {
    throw new Error("Error verifying token");
  }
};

exports.decoded = (token) => jwt.decode(token, { complete: true });
