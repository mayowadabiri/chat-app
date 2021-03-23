// import { Link } from "react-router-dom";

const Search = ({ value, onchange, placeholder, type, friends, onclick }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        type={type}
      />
      {friends.length > 0 ? (
        <div className="search__result">
          <div className="search__container">
            <ul className="search__list">
              {friends.map((friend) => (
                <li
                  className="search__item"
                  key={friend._id}
                  onClick={() => onclick(friend._id, friend.socketID)}
                >
                  <button className="search__link">
                    {`${friend.firstName} ${friend.lastName}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
