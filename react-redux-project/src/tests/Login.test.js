import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";

const store = legacy_createStore(reducer,middleware);

describe('can select user', () => {
    it('will select user', () => {
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
                        <Login/>
                </Provider>
            </MemoryRouter>
        )
        screen.debug()

        const dropdown = cmp.getByTestId("user-input");
        fireEvent.change(dropdown, { target : { value : "sarahedo"}})
        expect(dropdown[0].selected).toBeTruthy();
    })
})