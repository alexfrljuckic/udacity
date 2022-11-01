import { SET_AUTHED_USER, LOGOUT } from "../actions/authedUser";

export default function authedUser(state = null, action) {
    console.log('reducin',action.type)
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id;
        case LOGOUT:
            return action.id;
        default:
            return state;
    }
}