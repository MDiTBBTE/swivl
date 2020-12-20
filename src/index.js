import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux/store/store";
import routing from "./router/routes";

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>,
    document.getElementById("root")
);
