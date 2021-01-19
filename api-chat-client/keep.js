// const [msg, setmsg] = useState([]);

// useEffect(() => {
//   socket.on("connect", () => {
//     console.log("connected");
//     console.log(socket.id);
//   });

//   socket.on("private", (arg) => {
//     console.log(arg);
//     addMsg(arg.msg);
//   });
// }, []);

// const addMsg = (mmsg) => {
//   setmsg((prevState) => {
//     const updated = [...prevState];
//     updated.push(mmsg);
//     return updated;
//   });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("clicked");
//   socket.emit("private", {
//     id: value,
//     msg: "this is my msg",
//   });
// }
