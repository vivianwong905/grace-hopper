import { mockBarData } from "../assets/data";
import { useState, useEffect } from "react";


export default function TableData() {
  const [results, setResults] = useState(mockBarData);
  console.log(results, "data");
  console.log(results.id, "id");
  console.log(results.country, "country");
 {JSON.stringify(results)}
  console.log(results, "after string");
  return (
    <>
      <h3>Food results</h3>
      {results.map((result) => (
        <div>
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
