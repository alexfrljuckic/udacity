export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT = "LOGOUT";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
};

export function recieveAuthedUser(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(setAuthedUser(null));
    }
}