import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../styling/Nav.css';
import { logoutUser } from "../actions/authedUser";

const Nav = ({ dispatch }) => {

    const handleLogout = () => {
        dispatch(logoutUser());
    }
    return (
        <nav className="nav">
            <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/LeaderBoard">LeaderBoard</Link>
                    </li>
                    <li>
                        <Link to="/new">New</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => handleLogout()}>Log Out</Link>
                    </li>
            </ul>
        </nav>
    )
};

const mapStateToProps = ({ dispatch }) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps)(Nav);