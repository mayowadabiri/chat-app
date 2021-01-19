import NavigationItem from "./navigationItem";

const Navigation = ({ isAuth }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {isAuth ? (
          <>
            <NavigationItem link={"/create"}>Create </NavigationItem>
            <NavigationItem link={"/logout"}>Logout</NavigationItem>
          </>
        ) : (
          <>
            <NavigationItem link={"/login"}>Login</NavigationItem>
            <NavigationItem link={"/register"}>Register</NavigationItem>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
