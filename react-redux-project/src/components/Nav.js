import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../styling/Nav.css';
import { logoutUser } from "../actions/authedUser";

const Nav = ({ dispatch, authedUser, users }) => {

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
                        <div className="user-detail">
                            <img className="profile-pic" src={users[authedUser].avatarURL}/>
                            <span data-testid="nav-name">{users[authedUser].name}</span>
                            
                        </div>
                        <Link to="/" onClick={() => handleLogout()}>Log Out</Link>
                        
                    </li>
            </ul>
        </nav>
    )
};

const mapStateToProps = ({ dispatch, authedUser, users }) => {
    return {
        dispatch,
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Nav);