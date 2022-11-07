//Link between _DATA.js and the app
import { _getUsers, _getQuestions } from "../utils/_DATA";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ])
    .then(([users, questions]) => ({
        users,
        questions,
    }))
}