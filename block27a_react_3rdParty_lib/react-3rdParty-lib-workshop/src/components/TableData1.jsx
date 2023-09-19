import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockBarData } from "../assets/data";
import { useState} from "react";

export default function BasicTable() {
    const [results, setResults] = useState(mockBarData);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Burger Count</TableCell>
            <TableCell align="right">Kebab Count</TableCell>
            <TableCell align="right">Donut Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.country}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {result.country}
              </TableCell>
              <TableCell align="right">{result.burger}</TableCell>
              <TableCell align="right">{result.kebab}</TableCell>
              <TableCell align="right">{result.donut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
