import { increment } from "../redux/counterSlice";

import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

// props = {count: 0, setCount: stateUpdateFunction}
export default function IncrementButton() {
  // STEP 6. Get the dispatch function from React Redux
  const dispatch = useDispatch();

  return (
    <Button
      // STEP 7: Dispatch the action to the store
      // calling increment returns the increment action
      // calling dispatch performs that action
      onClick={() => dispatch(increment())}
      variant="contained"
      color="success"
      style={{ marginTop: 8 }}
    >
      <Add />
    </Button>
  );
}
