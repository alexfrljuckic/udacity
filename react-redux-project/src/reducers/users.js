import { RECEIVE_USERS, UPDATE_USERS } from "../actions/users";

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
        default:
            return state;
    }
}