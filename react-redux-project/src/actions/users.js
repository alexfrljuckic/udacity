export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUsers(answer, authedUser, qid) { 
  return {
    type : UPDATE_USERS,
    qid,
    answer,
    authedUser,
  }
}

export function addQuestion(authedUser, qid) {
  return {
    type: ADD_QUESTION,
    authedUser,
    qid
  }
}