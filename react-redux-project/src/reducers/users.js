import { RECEIVE_USERS, UPDATE_USERS, ADD_QUESTION } from "../actions/users";

export default function users(state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case UPDATE_USERS: {
            const { authedUser, qid, answer} = action;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                      ...state[authedUser].answers,
                      [qid]: answer
                    }
                  }
            }
        }
        case ADD_QUESTION: {
            const { authedUser, qid} = action;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    questions : state[authedUser].questions.concat([qid])
                }
            }
        }
        default:
            return state;
    }
}