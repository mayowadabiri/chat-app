// @ts-nocheck
import { useEffect } from "react";
import io from "socket.io-client";
import Friends from "./friends";

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
          <div className="dashboard__messages">kuewtdb8o7qwdgkiduliu</div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
