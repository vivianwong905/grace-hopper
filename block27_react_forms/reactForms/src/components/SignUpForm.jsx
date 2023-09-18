import { useState } from "react";
import "../App.css";

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handlePasswordChange(e) {
    if (e.target.value.length < 8) {
      setError("Password too short");
    }
    if (error && e.target.value.length >= 8) {
      setError("");
    }
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({ username, password });

    if (!error) {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
          }
        );
        const data = await response.json();
        console.log(data, "sign up form");
        setToken(data.token);
      } catch (e) {
        setError(e.message);
      }
    }
  }
  return (
    <>
      <h2>sign up</h2>
      {error && <p>{error}</p>}
      {/* if the first error is truthy then continue with the statement, the second error splits out the error message as text */}
      <form method="post" onSubmit={handleSubmit}>
        {/* onSubmit is a special event handler for the <form>, if it is not a form, use onClick  */}
        <label className="username">
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="submitBtn" disabled={error} >Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
