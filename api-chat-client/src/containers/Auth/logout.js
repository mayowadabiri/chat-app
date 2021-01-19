import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../store/actions";
const Logout = (props) => {
  useEffect(() => {
    props.onLogout();
  }, [props]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
};
export default connect(null, mapDispatchToProps)(Logout);
