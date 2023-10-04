import { useState } from 'react';
import '../App.css';

const PubForm = ({ successMsg, setSuccessMsg, setErrorMsg, errorMsg }) => {
  const [addPlayer, setAddPlayer] = useState('');
  const [addBreed, setAddBreed] = useState('');

  function resetForm() {
    setAddPlayer('');
    setAddBreed('');
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!errorMsg) {
      try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: addPlayer, breed: addBreed }),
          }
        );
        const data = await response.json();
        console.log(data, 'POST');
        setAddPlayer(data);
        setSuccessMsg(data.message);
      } catch (e) {
        setErrorMsg(e.message);
      }
    }
  }
  return (
    <>
      <h2>sign up for puppy bowl</h2>
      {/* if the first error is truthy then continue with the statement, the second error splits out the error message as text */}
      <form method="post" onSubmit={handleSubmit}>
        {/* onSubmit is a special event handler for the <form>, if it is not a form, use onClick  */}
        <label className="playername">
          {/* this came up "object object" */}
          Playername:{' '}
          <input
            value={addPlayer}
            onChange={(e) => setAddPlayer(e.target.value)}
          />
        </label>
        <br />
        <label>
          Breed:{' '}
          <input
            value={addBreed}
            onChange={(e) => setAddBreed(e.target.value)}
          />
        </label>
        <button className="submitBtn">Submit</button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
        {/* {successMsg && <p>{successMsg}</p>} how to display a toast? */}
      </form>
    </>
  );
};

export default PubForm;
