import { useState, useEffect } from "react";
import "./App.css";

import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";

function App() {
  const [token, setToken] = useState(null); // bc you need to use the token for your entire app

  useEffect(() => {
    console.log("New token: ", token);
  }, [token]);

  return (
    <div>
      <h1>React Forms Demo</h1>
      <UncontrolledForm />
      <hr />
      <ControlledForm setToken={setToken} />
    </div>
  );
}

export default App;
