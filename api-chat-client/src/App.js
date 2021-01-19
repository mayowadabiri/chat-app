// @ts-nocheck
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./hoc/layout";
import Register from "./containers/Auth/register";
import Login from "./containers/Auth/login";
import Logout from "./containers/Auth/logout";
import Dashboard from "./containers/chat/dahboard";
// import { checkAuth } from "./store/actions";
// import { connect } from "react-redux";
// import { useEffect } from "react";
// import { ProtectedRoute } from "./hoc/protectedroutes";

function App(props) {
  // useEffect(() => {
  //   props.onCheckAuth();
  // }, []);

  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect  to="/login" />
          </Route>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/chat" component={Dashboard} />
        </Switch>
      </Layout>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCheckAuth: () => {
//       dispatch(checkAuth());
//     },
//   };
// };

export default App
