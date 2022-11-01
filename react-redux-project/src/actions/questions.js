export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_SELECTION = "SAVE_SELECTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestion(answer, authedUser, qid) {
  return {
    type: SAVE_SELECTION,
    answer,
    authedUser,
    qid,
  }
}

