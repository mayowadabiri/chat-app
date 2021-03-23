// @ts-nocheck
import { useEffect } from "react";
import io from "socket.io-client";
import Friends from "./friends";
import Message from "./message";

const Dashboard = (props) => {
  useEffect(() => {
    const socket = io("http://localhost:8000/chat", {
      withCredentials: true,
    });
    socket.on("connect", () => {
      console.log(socket.id);
    });
  });
  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__box">
          <aside className="dashboard__friend">
            <Friends />
          </aside>
          <div className="dashboard__messages">
            <div className="dashboard__messages-container">
              <Message />
              <div className="dashboard__messages-input">
                <input
                  type="text"
                  // value=""
                  className="input"
                  placeholder="Type a message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
