import { useState, useEffect } from 'react'
import ContactRow from './ContactRow'


export default function ContactList({ setSelectedContactId }) { // another way you can access it's is call props.setSelectedContactId
  // this is call destructuring inside the {}
  const [contacts, setContacts] = useState([]); // replaced "" with []
  // () for the useState is the initial data - it was breaking bc i was trying to map over ""

  console.log("Contacts from line 6 ", contacts);
  // console.log("Contacts email: ", dummyContacts.email);
  // console.log("Contacts name: ", contacts.name);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        console.log(data, "data from line 18");
        setContacts(data); // replacing the contacts held in state,it is overwriting the value of contacts line 11
      } catch (e) {
        console.error(e);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id} // we always need a key to map - unique ID 
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              id={contact.id}
              setSelectedContactId={setSelectedContactId} // why we need this here, this is using as prop, it helps to transfer parent's data? 
            />
          );
        })}
      </tbody>
    </table>
  );
}
