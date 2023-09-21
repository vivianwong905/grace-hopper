import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

// STEP 3: import our Redux dependencies
import store from "./redux/store";
import { Provider } from "react-redux";

import {
  IncrementButton,
  DecrementButton,
  DisplayCount,
  CountAlert,
  ResetCountButton,
} from "./components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    // STEP 4: Provide the store to our app
    // so any component will be able to access it
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Typography variant="h1">Redux Demo</Typography>
        <DisplayCount />
        <IncrementButton />
        <DecrementButton />
        <CountAlert />
        <ResetCountButton />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
