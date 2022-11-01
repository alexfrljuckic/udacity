import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const Home = ({ users, authedUser, questions }) => {
    if(!users ||!questions) {return (<div>none</div>)}
    const currentUser = users[authedUser];
    const newQuestions = currentUser.questions.map((questionId) => questions[questionId]);
    const answeredQuestions = Object.keys(currentUser.answers).map((questionId) => questions[questionId]);
    return (
        <div>
            <div>
                <h1>New Questions</h1>
                {
                    newQuestions.map((question) => (
                        <QuestionCard key={question.id} question={question}/>
                    ))
                }
            </div>

            <div>
                <h1>Done</h1>
                {
                    answeredQuestions.map((question) => (
                        <QuestionCard key={question.id} question={question}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users,
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(Home);