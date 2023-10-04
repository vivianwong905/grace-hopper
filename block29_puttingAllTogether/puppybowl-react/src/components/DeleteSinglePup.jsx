import '../App.css';
import { useNavigate } from 'react-router-dom';

const DeleteSinglePup = ({ selectedPuppy, setSelectedPuppy, setErrorMsg }) => {
  // const [selectedPuppy, setSelectedPuppy] = useState(null);
  // const [errorMsg, setErrorMsg] = useState('');
  //   const navigate = useNavigate();
  const deleteSinglePuppy = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players/${selectedPuppy.id}`,
        { method: 'DELETE' }
      );
      const data = await response.json();
      console.log(data, 'deleted');
      console.log(selectedPuppy.id, 'IDIDIDID');
    } catch (e) {
      console.error(e);
      setErrorMsg(e.message);
    }
    //add useNavigate?
  };

  return (
    <>
      <button onClick={() => deleteSinglePuppy(selectedPuppy.id)}>
        delete
      </button>
      {/* <button onClick={() => navigate('/')}>Go Back Home</button> */}
    </>
  );
};
export default DeleteSinglePup;
