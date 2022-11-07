import { getInitialData } from "../utils/api";
import { receiveUsers, updateUsers, addQuestion } from "./users";
import { receiveQuestions, saveQuestion, createQuestion } from "./questions";
import { _saveQuestionAnswer,_saveQuestion  } from "../utils/_DATA";
export const GET_DATA = "GET_DATA";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    })
  }
}

export function handleSaveQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const context = { qid, answer, authedUser};
    return _saveQuestionAnswer(context)
      .then(() => {
        dispatch(saveQuestion(answer, authedUser, qid));
        dispatch(updateUsers(answer, authedUser, qid));
      })
  }
}

export function handleCreateQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = {
      optionOneText,
      optionTwoText,
      author : authedUser,
    }
    console.log(question)
    return _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(createQuestion(formattedQuestion))
        dispatch(addQuestion(authedUser, formattedQuestion.id))
      })
  }
}