import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
// Render the root component of the application
root.render(
  <React.StrictMode>
    {/* STEP 6: CONNECT MY APP TO THE REDUX STORE */}
    <Provider store={store}>
      <App /> {/* Render the App component */}
    </Provider>
  </React.StrictMode>
);
