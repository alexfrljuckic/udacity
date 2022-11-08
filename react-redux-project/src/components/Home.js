import { connect } from "react-redux";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import "../styling/home.css"

const Home = ({ newQuestions, answeredQuestions }) => {
    const [showNew, setShowNew] = useState(true);

    const handleToggle = () => {
        setShowNew(!showNew)
    }

    const newQuestionSection = <div className="section">
                                    <h1 className="col-md-2 mx-auto">New Questions</h1>
                                        <div className="card-section">
                                            {
                                                newQuestions.map((question) => (
                                                    <QuestionCard key={question.id} question={question}/>
                                            ))
                                        }
                                        </div>
                                    </div>
    const answeredQuestionSection = <div className="section">
                                        <h1 className="col-md-1 mx-auto">Done</h1>
                                        <div className="card-section">
                                        {
                                            answeredQuestions.map((question) => (
                                                <QuestionCard key={question.id} question={question}/>
                                            ))
                                        }
                                        </div>
                                    </div>

    const displayedSection = showNew ? newQuestionSection : answeredQuestionSection;

    return (
        <div className="section">
            <div>
                <button className="toggle-button" onClick={() => handleToggle()}>Show {showNew ? "Answered Questions" : "New Questions"}</button>
            </div>
            {displayedSection}

            
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