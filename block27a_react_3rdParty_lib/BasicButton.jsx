import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";


//  this was a demo


const BasicButton = () => {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="outlined">clickme!</Button>
      </Stack>
    );
};


function MyCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "Checkbox" }}
    />
  );
}
export {BasicButton, MyCheckbox};
