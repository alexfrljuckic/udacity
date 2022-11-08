import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from './Login';
function RequireAuth({ children, authedUser }) {
    const navigate = useNavigate();
    console.log(authedUser)
    if(authedUser === null) {
        navigate("/");
        return <Login/>
    }
    else {
        return children
    }
  }

  const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
  }
  export default connect(mapStateToProps)(RequireAuth);