import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
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

describe('nav to tabs', () => {

    it('leaderboard', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                        <Nav />
                </Provider>
            </MemoryRouter>
        )
        const leaderLink = screen.getByRole('link', { name : 'LeaderBoard' });
        expect(leaderLink).toHaveAttribute('href','/LeaderBoard')
    })

    it('new', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                        <Nav />
                </Provider>
            </MemoryRouter>
        )
        const newLink = screen.getByRole('link', { name : 'New' });
        expect(newLink).toHaveAttribute('href','/new')
    })
})