const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

const SignUpForm = () => {
    return (
      <>
        <h2>sign up</h2>
        <form>
          <label>
            Username: <input />
          </label>
          <label>
            Password: <input />
          </label>
          <button>Submit</button>
        </form>
      </>
    );
};

export default SignUpForm;