import React, { useState } from "react";
//import "./styles/Auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameOnChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordOnChange(event) {
    setPassword(event.taret.value);
  }

  function loginUser(event) {
    if (username === password) {
      alert("Welcome");
    } else {
      alert("Invalid Credentials");
    }
  }

  
    
  
  
  return(
    <div className={"auth-container"}>
      <h2>Login page</h2>
      <form className={"auth"} onSubmit={loginUser}>
        <input
          onChange={handleUsernameOnChange}
          value={"Username"}
          type={"text"}
          placeholder={"Please enter your username"}
        />
        <input
          onChange={handlePasswordOnChange}
          value={"password"}
          placeholder={"Please enter your password"}
        />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  
    );
}
export default Login;
