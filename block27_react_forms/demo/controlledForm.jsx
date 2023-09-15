/* eslint-disable react/prop-types */
import { useState } from "react";

const ControlledForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  function handleUsernameChange(e) {
    if (e.target.value.length > 20) {
      setError("Username too long");
    }
    if (error && e.target.value.length <= 20) {
      setError("");
    }
    setUsername(e.target.value);
  }

  function resetForm() {
    setUsername("");
    setIsChecked(false);
    setError("");
  }

  async function handleSubmit(e) {
    // prevent the browser from refreshing the page
    e.preventDefault();

    // read the data directly from state
    console.log({ username, isChecked });

    if (!error) {
      try {
        // send the data to the server with fetch
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            data: JSON.stringify({ username, password: "foobar" }),
          }
        );
        const data = await response.json();
        // do whatever we need to with the data
        console.log(data);
        setToken(data.token);
      } catch (e) {
        setError(e.message);
      }
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      {error && <p>{error}</p>}
      <label>
        Username: <input value={username} onChange={handleUsernameChange} />
      </label>

      <br />

      <label>
        Checkbox:{" "}
        <input
          value={isChecked}
          onChange={() => setIsChecked((isChecked) => !isChecked)}
          type="checkbox"
        />
      </label>

      <br />

      <button type="reset" onClick={resetForm}>
        Reset
      </button>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
