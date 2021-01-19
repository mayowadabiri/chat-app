import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <>
      <li className="navigation-item">
        <NavLink
          to={props.link}
          activeStyle={{
            fontWeight: 500,
            color: "white",
            border: "none"
          }}
          exact={props.exact}
          className="navigation-link"
        >
          {props.children}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItem;
