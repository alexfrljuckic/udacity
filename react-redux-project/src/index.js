import React from 'react';
import ReactDOM from "react-dom/client";
import App from './components/App';
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";
import './styling/index.css';


const store = legacy_createStore(reducer, middleware);

//Provider makes it possible for all components to access the store via the connect() function
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>
);