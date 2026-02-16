import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/app/App";
import { store } from "./features/app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
