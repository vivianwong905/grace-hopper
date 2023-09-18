/* eslint-disable react/prop-types */
import { useState } from "react";

const ControlledForm = ({ setToken }) => { //passing setToken from app so you can use it
  //parent to child 
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
            // data: JSON.stringify({ username, is_checked: isChecked}),
          }
        );
        const data = await response.json();
        // do whatever we need to with the data
        console.log(data);
        setToken(data.token); // the token is capture from the server and will have it from app
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
          onChange={() => setIsChecked((isChecked) => !isChecked)} // added isChecked =>!isChecked
          // this is to set to the current last one that is done in case there is a state update that is in progress
          //like someone clicked on the box too fast, then instead of firing 3 states of checkbox all at once and get confuses
          // but with isChecked) => !isChecked it will check the three clicks 
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
