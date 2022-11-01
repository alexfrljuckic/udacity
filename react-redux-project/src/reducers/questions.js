import { RECEIVE_QUESTIONS, SAVE_SELECTION } from "../actions/questions";

export default function questions(state={}, action) {
    console.log(action);
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SAVE_SELECTION: 
            return 
        default:
            return state;
    }
}