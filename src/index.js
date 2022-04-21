import React from "react";
import "./index.sass";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
