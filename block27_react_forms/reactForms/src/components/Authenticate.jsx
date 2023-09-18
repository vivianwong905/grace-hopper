import { useState } from "react";
import "../App.css";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [iat, setIat] = useState(null);

  console.log (token, "this is token");
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.data.iat, "auth results");
      setIat(result.data.iat);
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
      <button className="authBtn" type="submit" onClick={handleClick}>
        Authenticate Token
      </button>
      {iat && <h4>{iat}</h4>}
    </>
  );
}
