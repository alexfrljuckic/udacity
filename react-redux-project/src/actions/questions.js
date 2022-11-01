import { _saveQuestionAnswer } from "../utils/_DATA";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_SELECTION = "SAVE_SELECTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveQuestion(questions, answer, authedUser, qid) {
  return {
    type: SAVE_SELECTION,
    answer,
    authedUser,
    qid,
    questions
  }
}

export function handleSaveQuestion(qid, answer) {
  console.log('saving')
  return (dispatch, getState) => {
    console.log('here???')
    const { authedUser } = getState();
    const context = { qid, answer, authedUser};
    return _saveQuestionAnswer(context)
    .then(([users, questions]) => {
      console.log('thening')
      dispatch(saveQuestion(questions, answer, authedUser, qid));
    })
  }
}