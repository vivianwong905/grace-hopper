import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


export default function SingleContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState([]); // replaced "" with []
  // () for the useState is the initial data - it was breaking bc i was trying to map over ""

  console.log("singleContact: ", contact);
console.log(selectedContactId, "singleContact line 10");
  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        console.log(data, "data from singlecontact");
        setContact(data); // replacing the contacts held in state,it is overwriting the value of contacts line 11
      } catch (e) {
        console.error(e);
      }
    }
    fetchSingleContact();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Single Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id={contact.id}</td>
          <td>Email={contact.email}</td>
          <td>Phone={contact.phone}</td>
          <td>name={contact.name}</td>
        </tr>
        {/* {contact.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              id={contact.id}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })} */}
      </tbody>
    </table>
  );
}
