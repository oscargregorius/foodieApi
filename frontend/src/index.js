import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import store from "./redux/store";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Router from "./Router";

const stores = createStore(store, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
