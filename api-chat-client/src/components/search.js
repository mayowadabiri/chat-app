import { Link } from "react-router-dom";

const Search = ({ value, onchange, placeholder, type }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        type={type}
      />
      {/* <div className="search__result">
        <div className="search__container">
          <ul className="search__list">
            <li className="search__item">
              <Link className="search__link" to="/chat">
                Dabiri Mayowa
              </Link>
            </li>
            <li className="search__item">
              <Link className="search__link" to="/chat">
                Dabiri Mayowa
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
