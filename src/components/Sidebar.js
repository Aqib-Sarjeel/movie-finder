import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext, LogoutContext, CurrentUserContext } from "../App";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineInfoCircle,
  AiOutlineContacts,
  AiOutlineLogin,
} from "react-icons/ai";
import Logout from "./Logout";
import Home from "./Home";

function Sidebar() {
  const { isLoggedIn } = useContext(LoginContext);
  const { isLoggedOut } = useContext(LogoutContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      <div className="sidenav">
        {isLoggedIn && (
          <div className="welcome-text badge badge-primary text-wrap">
            Welcome: <span>{currentUser}</span>
          </div>
        )}
        <div className="link-container">
          <div className="link-style">
            <Link to="/">
              <p className="icons">
                <AiOutlineHome size="30px" />
                <span>Home</span>
              </p>
            </Link>
          </div>
          <div className="link-style">
            <Link to="/search">
              <p className="icons">
                <AiOutlineSearch size="30px" />
                <span>Search Movies</span>
              </p>
            </Link>
          </div>
          <div className="link-style">
            <Link to="/about">
              <p className="icons">
                <AiOutlineInfoCircle size="30px" />
                <span>About</span>
              </p>
            </Link>
          </div>

          <div className="link-style">
            <Link to="/contact">
              <p className="icons">
                <AiOutlineContacts size="30px" />
                <span>Contact</span>
              </p>
            </Link>
          </div>
          {isLoggedOut ? (
            <div className="link-style">
              <Link to="/login">
                <p className="icons">
                  <AiOutlineLogin size="30px" />
                  <span>Log In</span>
                </p>
              </Link>
            </div>
          ) : (
            <div className="button-container">
              <Logout />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
