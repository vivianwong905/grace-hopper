/* eslint-disable react/prop-types */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LogoLink from "./components/LogoLink";
import CounterButton from "./components/CounterButton";
import Button from "./components/Button";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Nancy",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjNlZWY4ZjgtMzhmYi00M2YxLTk0MDQtYmY2MzRhNDdmYWYxXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
  });

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <div>
        <LogoLink
          link="https://vitejs.dev"
          logo={viteLogo}
          altText="Vite logo"
        />
        <LogoLink
          link="https://react.dev"
          logo={reactLogo}
          altText="React logo"
        />
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterButton count={count} setCount={setCount} />
        <Button onClick={() => alert("hi!")} text="Click me for an alert" />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {user ? (
        <Button onClick={logout} text="Log Out" />
      ) : (
        <Button text="Log In" />
      )}
      {user && <Profile user={user} />}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
