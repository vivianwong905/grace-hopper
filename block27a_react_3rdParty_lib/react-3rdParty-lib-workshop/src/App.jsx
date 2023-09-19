import './App.css'
import BasicTable from './components/TableData1'
import StickyTable from './components/StickyTable'
import Drawer from '@mui/material/Drawer/Drawer'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


  function App() {
    return (
      <>
        <div>
          <Drawer />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <Item>
                <BasicTable />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <StickyTable />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }





export default App
