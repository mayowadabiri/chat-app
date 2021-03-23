// @ts-nocheck
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Friend from "../../components/friend.js";
import Search from "../../components/search.js";
import url from "../../constants/axioscreate";
import { getSocketID } from "../../store/actions/chat.js";

const Friends = ({ getSocket }) => {
  const [friends, setFriends] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [search, setSearch] = useState({
    type: "text",
    value: "",
    placeholder: "Search by name, email address and username",
  });

  useEffect(() => {
    if (search.value !== "") {
      setTimeout(() => {
        url
          .get(`/user/${search.value}`)
          .then((res) => {
            setFriends(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 5000);
    }
  }, [search.value]);

  const handleChange = ({ target }) => {
    setSearch({
      ...search,
      value: target.value,
    });
  };

  const handleClick = (receiverID, socketID) => {
    setSearch({
      ...search,
      value: "",
    });
    getSocket(receiverID);
    const user_id = localStorage.getItem("userID");
    url
      .get(`chat/${user_id}/${receiverID}`)
      .then((res) => {
        setFriendList((prevState) => [
          ...prevState,
          friends.find((friend) => {
            const id = friendList.find((friend) => friend._id === receiverID);
            if (id) {
              return null;
            } else {
              return friend._id === receiverID;
            }
          }),
        ]);
        setFriends([]);
      })
      .then(() => {
        console.log(friendList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="friends">
      <div>
        <Search
          value={search.value}
          placeholder={search.placeholder}
          type={search.type}
          onchange={handleChange}
          friends={friends}
          onclick={handleClick}
        />
      </div>
      <div className="friends__list">
        {friendList
          .filter((friend) => friend)
          .map((friend) => (
            <Friend key={friend._id} f={friend}>
              {`${friend.firstName} ${friend.lastName}`}{" "}
            </Friend>
          ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSocket: (id) => {
      dispatch(getSocketID(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Friends);
