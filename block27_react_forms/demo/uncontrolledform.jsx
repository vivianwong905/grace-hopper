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
    //only visible to extra the data using object.formEntries - that's why
    //you can't just console log formData
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

// not great compared to controlled from bc you can't see the data easily
//you cant see the data until you hit submit ex) you can't be like, can't submit btn if the username is too long
// bc you won't know when the username is too long until you hit submit