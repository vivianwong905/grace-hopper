import { useState } from "react";


const SignUpForm = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({ username, password });

    if (!error) {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            // data: JSON.stringify({ username, password: "foobar" }),
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
      <form method="post" onSubmit={handleSubmit}>
        <label>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
