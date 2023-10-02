import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

const CountAlert = () => {
  // STEP 5: Load the count from the store
  const count = useSelector((state) => state.count); // useSelector is a hook, this is how CountAlert have
  //access to count
  // you can always console log the state above
  const alertStyle = { marginTop: 8 };
  if (count > 10) {
    return (
      <Alert severity="success" style={alertStyle}>
        You win!
      </Alert>
    );
  }
  if (count < 0) {
    return (
      <Alert severity="error" style={alertStyle}>
        Game Over :(
      </Alert>
    );
  }
  return (
    <Alert severity="info" style={alertStyle}>
      Keep changing the number
    </Alert>
  );
};

export default CountAlert;
