// @ts-nocheck
import { useEffect } from "react";
import { useState } from "react";
import Friend from "../../components/friend.js";
import Search from "../../components/search.js";
import url from "../../constants/axioscreate";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState({
    type: "text",
    value: "",
    placeholder: "Search by name, email address and username",
  });

  useEffect(() => {
    url
      .get(`/user/search=${search.value}`)
      .then((res) => {
        console.log(res.data.result)
        setFriends(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search.value]);

  const handleChange = ({ target }) => {
    setSearch({
      ...search,
      value: target.value,
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
        />
      </div>
      <div className="friends__list">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

export default Friends;
