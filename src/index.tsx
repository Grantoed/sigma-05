import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter basename="/sigma-hw-05">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
