import React, { createContext, useState } from "react";
import "./App.css";
import Routes from "./components/Routes";
export const LoginContext = createContext();
export const LogoutContext = createContext();
export const CurrentUserContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <LoginContext.Provider
      value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
    >
      <LogoutContext.Provider
        value={{ isLoggedOut: isLoggedOut, setIsLoggedOut: setIsLoggedOut }}
      >
        <CurrentUserContext.Provider
          value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
        >
          <div className="App">
            <Routes />
          </div>
        </CurrentUserContext.Provider>
      </LogoutContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
