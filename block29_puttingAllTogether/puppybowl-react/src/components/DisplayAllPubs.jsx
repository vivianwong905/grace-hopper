import { useState, useEffect } from 'react';
import '../App.css';

const DisplayAllPubs = ({
  fullPuppyList,
  setFullPuppyList,
  setErrorMsg,
  setSelectedPuppy,
}) => {
  //props doesn't have to match name of state
  // const [fullPuppyList, setFullPuppyList] = useState(null);
  // const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchPuppies() {
      try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players'
        );
        const data = await response.json();
        // console.log(data, 'data');
        // console.log(data.data.players, 'players');
        setFullPuppyList(data.data.players);
      } catch (e) {
        console.error(e);
        setErrorMsg(e.message);
      }
    }
    fetchPuppies();
  }, []); // need to add something here?

  if (fullPuppyList) {
    // console.log(fullPuppyList, 'puppylist');
    return (
      <>
        <h1>Let's see all the players!</h1>
        <div>
          {fullPuppyList.map((puppy) => {
            // console.log(puppy, 'single puppy');
            return (
              <div key={puppy.id}>
                <img src={puppy.imageUrl} width="200" height="200" />
                <h2>{puppy.name}</h2>
                <h3>{puppy.breed}</h3>
                <button onClick={() => setSelectedPuppy(puppy)}>
                  see details
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return <p>Loading...</p>;
};

export default DisplayAllPubs;
