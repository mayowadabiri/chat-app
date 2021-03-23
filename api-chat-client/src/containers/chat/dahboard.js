// @ts-nocheck
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axiosURL from "../../constants/axioscreate";
import Friends from "./friends";
import Message from "./message";
import socket from "../../socket"




const Dashboard = ({ userID, socketID, receiverID }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userID !== null) {
     
      axiosURL
        .put(`/user/socket/${socketID}`, { user: userID })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response));
    }
    // });
  }, [userID]);

  const handleSubmit = (evt) => {
    if (evt.key === "Enter" && message !== "" && receiverID !== null) {
      socket.emit("private", {
        msg: message,
        receiver: receiverID,
      });
    }
  };

  useEffect(() => {
    socket.on("private", (args) => {
      console.log(args);
    });
  }, []);

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
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="input"
                  placeholder="Type a message"
                  onKeyPress={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.auth);
  return {
    userID: state.auth.userID,
    receiverID: state.chat.id,
  };
};
export default connect(mapStateToProps)(Dashboard);
