import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

// GOAL: not have to receive count
// access it from Redux Store instead
const DisplayNumber = () => {
  // STEP 5: Load the count from the store
  const count = useSelector((state) => state.count);

  return <Typography>{count}</Typography>;
};

export default DisplayNumber;
