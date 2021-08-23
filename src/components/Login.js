import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../index";
import { LoginContext, LogoutContext, CurrentUserContext } from "../App";
import Sidebar from "./Sidebar";

const Login = () => {
  const user = useContext(UserContext);
  const inputRef = useRef();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { isLoggedOut, setIsLoggedOut } = useContext(LogoutContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  console.log("i am user", user);
  console.log("this is login", login);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login.email.trim();
    login.password.trim();

    for (let i = 0; i < user.length; i++) {
      if (
        login.email === user[i].email &&
        login.password === user[i].password
      ) {
        // console.log("you are logged in");
        setIsLoggedIn(true);
        setIsLoggedOut(false);
        setCurrentUser(user[i].name);
        history.push("/search");
      }
    }
    for (let i = 0; i < user.length; i++) {
      if (
        login.email !== user[i].email &&
        login.password !== user[i].password
      ) {
        setErrorMsg("Wrong credentials");
        break;
      }
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#efefef";
    inputRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div className="main">
        <h1 className="text-center">
          <u> Log In</u>{" "}
        </h1>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 input-box-container">
                <strong>
                  <label>Email:</label>
                </strong>

                <input
                  placeholder="Email"
                  ref={inputRef}
                  type="text"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                />

                <strong>
                  <label>Password:</label>
                </strong>

                <input
                  placeholder="Password"
                  type="text"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                />
                <p className="text-danger">{errorMsg}</p>
                <button type="submit">Login</button>
                <p className="text-center">
                  Do not have an account please sign up{" "}
                  <Link to="/signup">
                    <span>Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
