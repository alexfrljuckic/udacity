import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";
import "../styling/home.css"

const Home = ({ newQuestions, answeredQuestions }) => {
    const navigate = useNavigate();/*
    const currentUser = users[authedUser];
    const answeredQuestionIds = Object.keys(currentUser.answers);
    const newQuestions = Object.keys(questions).filter((qid) => !answeredQuestionIds.includes(qid)).map((qid) => questions[qid]);
    const answeredQuestions = Object.keys(currentUser.answers).map((questionId) => questions[questionId]);*/
    
    return (
        <div>
            <div className="section">
                <h1 className="col-md-2 mx-auto">New Questions</h1>
                <div className="card-section">

                
                {
                    newQuestions.map((question) => (
                        <QuestionCard key={question.id} question={question}/>
                    ))
                }
                </div>
            </div>

            <div className="section">
                <h1 className="col-md-1 mx-auto">Done</h1>
                <div className="card-section">
                {
                    answeredQuestions.map((question) => (
                        <QuestionCard key={question.id} question={question}/>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
    const currentUser = users[authedUser];
    const answeredQuestionIds = Object.keys(currentUser.answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    const sortedQuestions = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const newQuestions = sortedQuestions.filter((qid) => !answeredQuestionIds.includes(qid)).map((qid) => questions[qid]);

    const answeredQuestions = answeredQuestionIds.map((questionId) => questions[questionId]);
    return { 
        newQuestions,
        answeredQuestions,
    }
}

export default connect(mapStateToProps)(Home);