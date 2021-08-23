import React, { useState, useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import { UserContext } from "../index";

const SignUp = () => {
  const history = useHistory();
  const inputRef = useRef();
  const user = useContext(UserContext);
  const [newUser, setNewUser] = useState(user);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("updated user", user);

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUser(newUser.push(signUp));
    history.push("/login");

    console.log("this is signup data", signUp);
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
          <u> Sign Up</u>{" "}
        </h1>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 input-box-container">
                <strong>
                  <label>Name:</label>
                </strong>
                <input
                  ref={inputRef}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={signUp.name}
                  onChange={handleChange}
                />

                <strong>
                  <label>Email:</label>
                </strong>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={signUp.email}
                  onChange={handleChange}
                />

                <strong>
                  <label>Password:</label>
                </strong>
                <input
                  placeholder="Password"
                  type="text"
                  name="password"
                  value={signUp.password}
                  onChange={handleChange}
                />

                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
