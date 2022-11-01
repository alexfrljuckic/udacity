import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveQuestion } from "../actions/shared";

const Question = (props) => {
    const question = props.questions[props.id];
    const author = props.users[question.author].name;

    const handleSelection = (selectedOption) => {
        props.dispatch(handleSaveQuestion(question.id, selectedOption));
    }

    return (
        <div>
            <div>
                <h1>Poll by {author}</h1>
                <h1>Would You Rather</h1>
            </div>
            <div>
                <div>{question.optionOne.text}</div>
                <button onClick={() => handleSelection("optionOne")}>Select</button>
                <div>{question.optionTwo.text}</div>
                <button onClick={() => handleSelection("optionTwo")}>Select</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    const { id } = props.router.params;
    return {
        id,
        users,
        questions,
        authedUser,
    }
}

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
};

export default withRouter(connect(mapStateToProps)(Question));