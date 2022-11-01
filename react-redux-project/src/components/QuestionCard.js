import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ question, users }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/question/${question.id}`);
    }
    
    return (
        <div>
            <div>
                <span>{users[question.author].name}</span>
                <span>{formatDate(question.timestamp)}</span>
            </div>

            <div>
                <button onClick={() => handleClick()}>Show</button>
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