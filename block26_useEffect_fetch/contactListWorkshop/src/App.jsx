import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SingleContact from './components/singleContact';



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null); //If it’s defined in App, and used by a child component, you will need to pass it via props to the child component that needs it.
  // Because you cannot share state directly from child to child (siblings), we need to put this state value in the PARENT component, then share it down to each child component via props.
  // that's why line 10 is in the parent app and not contactlist or singlecontactlist (bc these two are sibilings)
  // why null? Only if there is no selectedContactId, conditionally render the ContactList component. Or in other words, if the selectedContactId is null, render the ContactList component.

  return (
    <>
      {selectedContactId ? (
        <SingleContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        /> // i don't fully understand selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App
