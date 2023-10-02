import { decrement } from "../redux/counterSlice";

import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Remove from "@mui/icons-material/Remove";

// props = {count: 0, setCount: stateUpdateFunction}
export default function DecrementButton() {
  // STEP 6. Get the dispatch function from React Redux
  const dispatch = useDispatch(); // if we call a redux action, you must dispatch it

  return (
    <Button
      // STEP 7: Dispatch the action to the store
      // calling decrement returns the decrement action
      // calling dispatch performs that action
      onClick={() => dispatch(decrement())}
      variant="contained"
      color="error"
      style={{ marginTop: 8 }}
    >
      <Remove />
    </Button>
  );
}
