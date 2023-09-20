import { mockBarData } from "../assets/data";
import { useState, useEffect } from "react";


export default function TableData() {
  const [results, setResults] = useState(mockBarData);
  return (
    <>
      <h3>Food results</h3>
      {results.map((result) => (
        // key needs to be on the parent component(div) - that's why it is throwing error, see line 12 
        <div key={result.country}>
          <tr>
            <td>country = {result.country}</td>
            <td>burger = {result.burger}</td>
            <td>kebab = {result.kebab}</td>
          </tr>
        </div>
      ))}
    </>
  );
}

//const TableRow = (burger, country, kebab, id) => { 
    // this was throwing an error bc i didn't destructure the pros, it is reading as arguement - need to do {}
    // or i will have to do: burger.country, burger.kebab...etc
//   return (
//     <tr>
//       <td>{country}</td>
//       <td>{burger}</td>
//       <td>{kebab}</td>
//     </tr>
//   );
// };

// {results.map((result) => (
//         <TableRow
//           key={result.country}
//           burger={result.burger}
//           kebab={result.kebab}
//         />
//       ))}

// Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
