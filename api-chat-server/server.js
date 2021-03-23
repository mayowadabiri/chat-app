// @ts-nocheck
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const socket = require("./socket");
const User = require("./models/user");
// const Chat = require("./models/chat");
require("dotenv").config();
// const io = require("./socket");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const userRoutes = require("./routes/user");
const { SERVER_CONFIG, SERVER_ENDPOINT } = require("./helpers");

const app = express();

app.use(cors());

app.use(express.urlencoded());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/", (req, res, next) => {
  res.send("API server up and running");
  res.end()
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/chat", chatRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  if (error.name !== "Error") {
    return res.status(500).json({
      message: "Error proceessing request",
      code: 500,
    });
  }
  return res.status(error.code).json({
    message: error.msg,
    code: error.code,
  });
});


// const chat = io.

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0bj1i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
  const server =  app.listen(SERVER_CONFIG.port, () => {
      console.log(`Server listening on ${SERVER_ENDPOINT}`);
    });
    const io = require("./constants/socket").init(server);
    const chat = io.of("/chat")
    chat.on("connection", (socket) => {
      socket.emit("socket id", socket.id)
      // console.log(socket.id)
     socket.on("private", async ({ msg, receiver }) => {
       const user = await User.findOne({ _id: receiver });
       console.log(socket.id)
      //  console.log(user.socketID)
      //  socket.join(user.socketID)
       chat.to(user.socketID).to(socket.id).emit("private", ({
         msg
       }));
     });
    })
  })
  .catch((error) => {
    throw error;
  });
