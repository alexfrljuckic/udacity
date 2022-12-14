import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveQuestion } from "../actions/shared";
import "../styling/Questions.css"


const Question = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedPercentOne, setSelectedPercentOne] = useState(0);
    const [selectedPercentTwo, setSelectedPercentTwo] = useState(0);
    const [timesAnswerOneSelected, setTimesAnswerOneSelected] = useState(0);
    const [timesAnswerTwoSelected, setTimesAnswerTwoSelected] = useState(0);

    const currentUser = props.users[props.authedUser];
    const question = props.questions[props.id];
    const author = props.users[question?.author]?.name;

    useEffect(() => {
        const hasAnswered = (Object.keys(currentUser?.answers).includes(props.id));
        setIsAnswered(hasAnswered);

        

        if(hasAnswered) {
            const currentUsersAnswer = currentUser?.answers[props.id];
            setSelectedOption(currentUsersAnswer);

            const userIdList = Object.keys(props.users);
            const timesSelected = userIdList.filter((userid) => props.users[userid].answers[props.id] === currentUsersAnswer).length;
            setTimesAnswerOneSelected(timesSelected)
            setTimesAnswerTwoSelected(userIdList.length - timesSelected);
            const totalAmountOfUsers = userIdList.length;
            const percentOptOneSelected = timesSelected / totalAmountOfUsers *100;
            setSelectedPercentOne(percentOptOneSelected);
            setSelectedPercentTwo(100 - percentOptOneSelected);
        }
    },[currentUser?.id, props.id, props.users, currentUser?.answers])

    const handleSelection = (opt) => {
        setSelectedOption(opt);
        setIsAnswered(true)
        props.dispatch(handleSaveQuestion(question.id, opt));
    }
    
    const isSelectedClass = (opt) => {
        return (opt === selectedOption) ? "selected poll-option" : " poll-option";
    }

    return (
        <div className="question">
            <div className="question-header">
                <h1>Poll by {author}</h1>
                <img src={props.users[question?.author]?.avatarURL} className="poll-image" alt=""/>
                <h3>Would You Rather</h3>
            </div>
            <div className="poll-options">
                <div className={isSelectedClass("optionOne")}>
                    <div>{question?.optionOne.text}</div>
                    <button onClick={() => handleSelection("optionOne")} disabled={isAnswered} className="poll-button">Select</button>
                    {
                    isAnswered && 
                    <div>{timesAnswerOneSelected} person(s) picked this. That's {selectedPercentOne}% of people that picked the same answer!</div>
                }
                </div>
                <div className={isSelectedClass("optionTwo")}>
                    <div>{question?.optionTwo.text}</div>
                    <button onClick={() => handleSelection("optionTwo")} disabled={isAnswered} className="poll-button">Select</button>
                    {
                    isAnswered && 
                    <div>{timesAnswerTwoSelected} person(s) picked this. That's {selectedPercentTwo}% of people that picked the same answer!</div>
                }
                </div>
                
            </div>
            <div>
                
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