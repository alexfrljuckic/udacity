import { connect } from "react-redux";
import {  Navigate } from "react-router-dom";

function RequireAuth({ children, authedUser }) {
    return authedUser ? children : <Navigate to="/" replace />;
  }

  const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
  }
  export default connect(mapStateToProps)(RequireAuth);