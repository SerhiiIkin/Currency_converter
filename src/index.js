import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App/";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.querySelector("#app")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
