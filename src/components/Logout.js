import React, { useContext } from "react";
import { LoginContext, LogoutContext } from "../App";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { isLoggedOut, setIsLoggedOut } = useContext(LogoutContext);

  const handleLogout = () => {
    setIsLoggedOut(true);
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      {isLoggedIn && (
        <button className="button-logout" onClick={handleLogout}>
          Logout
        </button>
      )}
    </React.Fragment>
  );
};

export default Logout;
