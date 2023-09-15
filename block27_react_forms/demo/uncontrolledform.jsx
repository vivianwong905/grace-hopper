const UncontrolledForm = () => {
  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // read the data in the form
    const form = event.target;
    const formData = new FormData(form);

    // we can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // we can access the plain object version:
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>Uncontrolled Form:</h2>

      <label>
        Username: <input name="myInput" defaultValue="Initial text" />
      </label>

      <br />

      <label>
        Checkbox:{" "}
        <input name="myCheckbox" defaultChecked={true} type="checkbox" />
      </label>

      <br />

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
