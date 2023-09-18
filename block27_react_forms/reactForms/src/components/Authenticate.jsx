import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  console.log (token, "this is token");
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setSuccessMessage(result.message);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      <br />
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button type="submit" onClick={handleClick}>
        Authenticate Token
      </button>
    </>
  );
}
