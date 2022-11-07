import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";

const store = legacy_createStore(reducer,middleware);

test('renders app', () => {
    render(
        <MemoryRouter>
<Provider store={store}>
        <App/>
    </Provider>
        </MemoryRouter>
    )
})