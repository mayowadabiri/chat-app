import { io } from "socket.io-client";

const socket = io("http://localhost:8000/chat", {
  withCredentials: true,
});

export default socket