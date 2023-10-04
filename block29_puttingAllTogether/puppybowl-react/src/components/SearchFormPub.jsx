import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const SearchFormPub = (setErrorMsg) => {
  const { input } = useParams();
  const [getInput, setGetInput] = useState('');
  const [filterInput, setFilterInput] = useState('');
  useEffect(() => {
    async function searchPuppy() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players/`
        );
        const data = await response.json();
        console.log(data);
        setGetInput(getInput);
        setFilterInput(filterInput);
      } catch (e) {
        console.error(e);
        setErrorMsg(e.message);
      }
    }
    searchPuppy();
  }, []); // need to add something here?

  const handleSubmit = (value) => {
    const res = filterInput.filter((f) => f.name.toLowerCase().includes(value));
    setGetInput(res);
  };
  //   if (getInput) {
  return (
    <>
      <h2> Search a Puppy!</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Search a puppy"
          onChange={(e) => handleSubmit(e.target.value)}
        />
      </div>
      {/* <div className="searchResult">
        {getInput.map((d, i) => (
          <div key={i}>{d.name}</div>
        ))}
      </div> */}
    </>
  );
  //   }
};

export default SearchFormPub;
