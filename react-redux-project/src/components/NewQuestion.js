import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleCreateQuestion } from "../actions/shared";
import "../styling/NewQuestion.css"

const NewQuestion = (props) => {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleCreateQuestion(optionOne, optionTwo));
        navigate("/Home");
    }

    return (
        <div className="new-question">
            <h1>Create your own poll</h1>
            <h3>Would you rather</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                <input type="text" value={optionOne} onChange={(e) => setOptionOne(e.target.value)} placeholder="Insert option 1" className="poll-question"></input>
                <input type="text" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} placeholder="Insert option 2" className="poll-question"></input>
                </div>
                <div>
                <button className="submit-button">Submit</button>
                </div>
                
            </form>
            
        </div>
    )
}

const mapStateToProps = ({ authedUser }) => { 
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);