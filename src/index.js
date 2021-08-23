import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export const UserContext = React.createContext();

ReactDOM.render(
  <UserContext.Provider
    value={[
      {
        name: "Aqib Sarjeel",
        email: "iamaqibsarjeel@gmail.com",
        password: "Aqib@123",
      },
      {
        name: "Alfiya",
        email: "iamalfiya@gmail.com",
        password: "Alfiya@123",
      },
      {
        name: "Adil",
        email: "iamadil@gmail.com",
        password: "Adil@123",
      },
    ]}
  >
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
