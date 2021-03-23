// @ts-nocheck
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./hoc/layout";
import Register from "./containers/Auth/register";
import Login from "./containers/Auth/login";
import Logout from "./containers/Auth/logout";
import Dashboard from "./containers/chat/dahboard";
import { useEffect, useState } from "react";
import { checkAuth } from "./store/actions";
import { connect } from "react-redux";
// import { ProtectedRoute } from "./hoc/protectedroutes";
import socket from "./socket"

function App(props) {
    const [socketID, setSocketID] = useState();
  useEffect(() => {
    props.onCheckAuth();
  }, []);

  console.log(socketID)

    useEffect(() => {
      socket.on("connect", () => {
        setSocketID(socket.id);
      });
    }, [socketID]);

  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/chat" render={() => <Dashboard socketID={socketID} />} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => {
      dispatch(checkAuth());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
