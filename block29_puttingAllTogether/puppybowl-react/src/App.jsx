import { useState } from 'react';
import './App.css';
import DisplayAllPubs from './components/DisplayAllPubs';
import DisplaySinglePup from './components/DisplaySinglePup';
import PubForm from './components/PubForm';
import SearchFormPub from './components/SearchFormPub';
import { Routes, Route, Link } from 'react-router-dom';
import Allpubs from './components/Allpubs';

function App() {
  const [fullPuppyList, setFullPuppyList] = useState(null);
  const [selectedPuppy, setSelectedPuppy] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  // console.log({ selectedPuppy }, 'line 11 app'); //this is a good way to debug to log out all your state
  if (errorMsg) {
    return (
      <div>
        <h2>Oh no! Something went wrong</h2>
        <p>{errorMsg}</p>
        <div onClick={() => setErrorMsg('')}>click to resolve</div>
      </div>
    );
  }
  return (
    <>
      <div className="link">
        <Link to="/search">SEARCH</Link>
        <br />
        <Link to="/form">Submit a Puppy form</Link>
        <br />
        {/* <Link to="/">Home</Link> */}
        <br />
      </div>
      <Routes>
        <Route
          path="/form"
          element={
            <PubForm
              setErrorMsg={setErrorMsg}
              setSuccessMsg={setSuccessMsg}
              successMsg={successMsg}
              errorMsg={errorMsg}
            />
          }
        />
        <Route path="/search" element={<SearchFormPub />} />
        <Route
          path="/"
          element={
            <Allpubs
              setErrorMsg={setErrorMsg}
              fullPuppyList={fullPuppyList}
              selectedPuppy={selectedPuppy}
              setFullPuppyList={setFullPuppyList}
              setSelectedPuppy={setSelectedPuppy}
            />
          }
        />
      </Routes>

      {/* can i wrap route with if statements */}
      {selectedPuppy ? (
        <DisplaySinglePup
          selectedPuppy={selectedPuppy}
          setSelectedPuppy={setSelectedPuppy}
        />
      ) : (
        <DisplayAllPubs
          setErrorMsg={setErrorMsg}
          fullPuppyList={fullPuppyList}
          setFullPuppyList={setFullPuppyList}
          setSelectedPuppy={setSelectedPuppy}
        />
      )}
    </>
  );
}

export default App;
