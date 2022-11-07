import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import "../styling/questionCard.css"

const QuestionCard = ({ question, users }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/question/${question.id}`);
    }
    
    return (
        <div className="card">
            <div className="card-header">
                <h3>{users[question.author].name}</h3>
                <p>{formatDate(question.timestamp)}</p>
            </div>

            <div>
                <button className="card-button" onClick={() => handleClick()}>Show</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}
export default connect(mapStateToProps)(QuestionCard);