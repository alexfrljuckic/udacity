import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import App from "../components/App";
import Nav from "../components/Nav";

const store = legacy_createStore(reducer,middleware);

describe('login', () => {
    it('will log in', () => {
        const authedUser = 'test';
        const users = {
            test : {
                avatarURL : 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
                name: 'test'
            }
        }
        const context = {
            authedUser,
            users
        }
        var cmp = render(
            <MemoryRouter>
                <Provider store={store}>
                        <Nav props={context}/>
                </Provider>
            </MemoryRouter>
        )
    })
})