import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {AppContext, stores} from "./app-context";
import "@/styles/app.scss"

const renderApp = (root: Element, App: React.FunctionComponent) => {
    ReactDOM.render(
        <AppContext.Provider value={stores}>
            <App/>
        </AppContext.Provider>,
        root
    );
};

const root = document.getElementById("root");
renderApp(root, App);

if (module.hot) {
    module.hot.accept("./App", () => {
        // noinspection UnnecessaryLocalVariableJS
      const NewApp = require("./App").App;
        renderApp(root, NewApp);
    });
}
