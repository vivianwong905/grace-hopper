import React from 'react';
import DisplayAllPubs from './DisplayAllPubs';
import DisplaySinglePup from './DisplaySinglePup';

const Allpubs = (
  selectedPuppy,
  setSelectedPuppy,
  setErrorMsg,
  fullPuppyList,
  setFullPuppyList
) => {
  return (
    <div>
      <h2>this is the home page</h2>
      {/* {selectedPuppy ? (
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
      )} */}
    </div>
  );
};
export default Allpubs;
