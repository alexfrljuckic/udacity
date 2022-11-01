export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

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