// const io = require("./socket").init(server);
// io.on("connection", (socket) => {
//   // console.log(socket)
//   socket.join("my rom");
//   io.to("my rom").emit("hello", "world");
//   socket.emit("getID", socket.id);
//   // socket.on("private", (arg) => {
//   //   console.log(socket.id);
//   //   // socket.join(arg.id)
//   //   io.to(arg.id)
//   //     .to(socket.id)
//   //     .emit("private", {
//   //       id: socket.id,
//   //       msg: `${socket.id} says ${arg.msg}`,
//   //     });
//   // });

//   socket.on("saveID", async (arg) => {
//     const user = await User.findOne({ email: arg.email });
//     user.socketID = arg.id;
//     await user.save();
//     socket.emit("savedID", user);
//   });

//   socket.on("sendMessage", async ({ sender, receiver, message }) => {
//     const senderemail = await User.findOne({ email: sender });
//     const receiveremail = await User.findOne({ email: receiver });
//     const chat = new Chat({
//       message: message,
//       sender: senderemail._id,
//       receiver: receiveremail._id,
//     });
//     await chat.save();
//     io.to(receiveremail.socketID).to(senderemail.socketID).emit("private", {
//       name: senderemail.name,
//       message,
//     });
//   });
// });
