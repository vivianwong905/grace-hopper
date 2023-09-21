import Button from "@mui/material/Button";

import { reset } from "../redux/counterSlice";
import { useDispatch } from "react-redux";

const ResetCountButton = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(reset())}>Reset Count</Button>;
};

export default ResetCountButton;
