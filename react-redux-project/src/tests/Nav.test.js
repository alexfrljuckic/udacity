import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import Nav from "../components/Nav";

const store = legacy_createStore(reducer,middleware);
describe('nav', () => {
    it('nav snapshot matches', () => {
        var cmp = render(
            <MemoryRouter>
                <Provider store={store}>
                        <Nav />
                </Provider>
            </MemoryRouter>
        )
        expect(cmp).toMatchSnapshot();
    })
})