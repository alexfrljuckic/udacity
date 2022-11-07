import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recieveAuthedUser } from "../actions/authedUser";
import { useState } from "react";
import '../styling/Login.css';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        props.dispatch(recieveAuthedUser(username));
        navigate("/Home");
    }

    return (
        <div className="login">
            <h1>Employee Polls</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <select name="cars" id="cars" value={username} onChange={(e) => handleUsername(e)}>
                    <option>Select a User</option>
                    {
                        Object.keys(props.users).map((userId) => (
                            <option key={userId} value={userId}>{userId}</option>
                        ))
                    }
                </select>
                <button disabled={!username} className="login-button">Log In</button>
            </form>
        </div>
    )
}

const mapStateToProps= ({ users }) => {

    return {
        users
    }
}

export default connect(mapStateToProps)(Login);