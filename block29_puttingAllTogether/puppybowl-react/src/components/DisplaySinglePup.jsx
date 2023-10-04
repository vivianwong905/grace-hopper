import { useState, useEffect } from 'react';
import '../App.css';
import DeleteSinglePup from './DeleteSinglePup';

const DisplaySinglePup = ({ selectedPuppy, setSelectedPuppy, setErrorMsg }) => {
  // const [selectedPuppy, setSelectedPuppy] = useState(null);
  const [onePub, setOnePub] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function fetchSinglePuppy() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players/${selectedPuppy.id}`
        );
        const data = await response.json();
        // console.log(data.data.player, 'players');
        setOnePub(data.data.player);
      } catch (e) {
        console.error(e);
        setErrorMsg(e.message);
      }
    }
    fetchSinglePuppy();
  }, []); // need to add something here?

  return (
    <>
      <div>
        <img src={onePub.imageUrl} width="300" height="300" />
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Single Puppy Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id={onePub.id}</td>
            <td>Status={onePub.status}</td>
            <td>Breed={onePub.breed}</td>
          </tr>
        </tbody>
      </table>
      <DeleteSinglePup
        selectedPuppy={selectedPuppy}
        setSelectedPuppy={setSelectedPuppy}
      />
    </>
  );
};

export default DisplaySinglePup;
