"use strict";

// API URL
const API_URL = "https://fsa-async-await.herokuapp.com/api/demo/recipes";

// get recipe and form container elements from DOM
const recipesContainerEl = document.getElementById("recipes-container");
const newRecipeFormEl = document.getElementById("new-recipe-form");

// ------------ API Helpers ------------------

// RETRIEVE: part 1: fetch the recipes
const fetchAllRecipes = async () => {
  // GET from API_URL
  try {
    const response = await fetch(API_URL);
    const recipes = await response.json();
    console.log(recipes);
    return recipes;
  } catch (error) {
    console.error(error);
  }
};

// RETRIEVE: get a single recipe from the DB
const fetchSingleRecipe = async (id) => {
  // GET from API_URL
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const recipe = await response.json();
    console.log(recipe);
    return recipe;
  } catch (error) {
    console.error(error);
  }
};

// CREATE part 2: send create request to the DB
const createNewRecipe = async (recipeData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    const recipe = await response.json();
    console.log("Recipe added: ", recipe);

    // CREATE part 3: update the UI to reflect the new state
    const recipes = await fetchAllRecipes();
    renderAllRecipes(recipes);
  } catch (e) {
    console.error(e);
  }
};
// TODO: #6 UPDATE: update the resources using the API

// DELETE part 2: delete the resource from the database
const removeRecipe = async (id) => {
  try {
    // DELETE https://fsa-async-await.herokuapp.com/api/demo/recipes/:recipeId
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const recipe = await response.json();
    console.log(recipe);

    // DELETE part 3: re-render the recipes now that we deleted one
    const recipes = await fetchAllRecipes();
    renderAllRecipes(recipes);
  } catch (error) {
    console.error(error);
  }
};

// ------------ Render/DOM Helpers ------------------

// RETRIEVE part 2: render the data in the DOM
const renderAllRecipes = (recipeList) => {
  if (!recipeList || recipeList.length === 0) {
    const h2 = document.createElement("h2");
    h2.textContent = "No recipes found";
    recipesContainerEl.appendChild(h2);
    return;
  }

  recipesContainerEl.innerHTML = "";

  recipeList.forEach((recipe) => {
    // create container for this recipe
    const recipeEl = document.createElement("div");
    recipeEl.classList.add("recipe-card");

    // render the title in a heading
    const recipeHeading = document.createElement("h3");
    // easy to see if the recipe title is rendering on the webpage using textContent
    recipeHeading.textContent = recipe.title;

    // render the image
    const recipeImage = document.createElement("img");
    // src - this is the same as .setAttribute('src', recipe.image_url);
    recipeImage.src = recipe.image_url;
    // alt text
    recipeImage.alt = recipe.title;

    // render the instructions
    // const recipeInstructions = document.createElement('p');
    // recipeInstructions.textContent = recipe.instructions;

    const actionContainer = document.createElement("div");
    actionContainer.append(getDetailButton(recipe), getDeleteButton(recipe));

    // #1 Refactor to use event delegation for action buttons
    // This creates a new event listener function for EVERY recipe item
    // actionContainer.addEventListener('click', async event => {
    //   if (event.target.classList.contains('delete-button')) {
    //     console.log('Delete button pressed!');

    //     await removeRecipe(recipe.id);
    //   } else if (event.target.classList.contains('detail-button')) {
    //     console.log('Detail button pressed!');

    //     renderSingleRecipe(recipe);
    //   }
    // });

    // append all the sections into the recipeEl
    recipeEl.append(
      recipeHeading,
      recipeImage,
      // recipeInstructions,
      actionContainer
    );

    // append this recipe to the main recipes container
    recipesContainerEl.appendChild(recipeEl);
  });

  // #2 Refactor to use event delegation for all Recipe Item buttons
  recipesContainerEl.addEventListener("click", async (event) => {
    console.log("Target: ", event.target);
    console.log("this", this);
    console.log("this: ", this.classList.contains("recipes-container"));
    console.log("Current Target: ", event.currentTarget);
    if (event.target.classList.contains("delete-button")) {
      console.log("Delete button pressed!");

      const recipeID = event.target.dataset.id;
      await removeRecipe(recipeID);
    } else if (event.target.classList.contains("detail-button")) {
      console.log("Detail button pressed!");

      const recipeID = event.target.dataset.id;

      // how do I get the recipe data from this recipeID?
      const recipe = await fetchSingleRecipe(recipeID);

      renderSingleRecipe(recipe);
    }
  });
};

// DELETE part 1: render a delete button
const getDeleteButton = (recipe) => {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.dataset.id = recipe.id;
  deleteButton.textContent = "Remove";
  return deleteButton;
};

const getDetailButton = (recipe) => {
  const detailButton = document.createElement("button");
  detailButton.dataset.id = recipe.id;
  detailButton.classList.add("detail-button");
  detailButton.textContent = "See Details";
  return detailButton;
};

const getBackButton = () => {
  const backButton = document.createElement("button");
  backButton.textContent = "Back";

  backButton.addEventListener("click", async (event) => {
    const recipes = await fetchAllRecipes();
    renderAllRecipes(recipes);
  });

  return backButton;
};

// RETRIEVE part 3: render a single resource
const renderSingleRecipe = (recipe) => {
  console.log("Render: ", recipe.id);

  recipesContainerEl.innerHTML = "";

  if (!recipe) {
    const h2 = document.createElement("h2");
    h2.innerText = "No recipe found";
    recipesContainerEl.appendChild(h2);
    return;
  }

  const recipeViewContainer = document.createElement("div");
  recipeViewContainer.classList.add("single-recipe-view");

  const recipeInfo = document.createElement("div");
  recipeInfo.classList.add("recipe");

  // render the title in a heading
  const recipeHeading = document.createElement("h3");
  recipeHeading.textContent = recipe.title;

  // render the image
  const recipeImage = document.createElement("img");
  // src - this is the same as .setAttribute('src', recipe.image_url);
  recipeImage.src = recipe.image_url;
  // alt text
  recipeImage.alt = recipe.title;
  recipeImage.style.maxWidth = "600px";

  // render the instructions
  const recipeInstructions = document.createElement("p");
  recipeInstructions.textContent = recipe.instructions;

  // append all the nodes into recipeInfo
  recipeInfo.append(
    getBackButton(),
    recipeHeading,
    recipeImage,
    recipeInstructions
  );

  // TODO: #5 Add UPDATE button

  recipeViewContainer.appendChild(recipeInfo);

  recipesContainerEl.appendChild(recipeViewContainer);
};

// TODO: #4 Refactor to re-use for UPDATE
// TODO: #4.1 Add optional arguments
// CREATE: part 1: render the create form
const renderCreateNewRecipeForm = () => {
  // <form>
  // <label for="title">Title</label>
  // <input type="text" id="title" name="title" placeholder="Title">

  // <label for="image_url">Image URL</label>
  // <input type="text" id="image_url" name="image_url" placeholder="Image URL">

  // <label for="instructions">Instructions</label>
  // <textarea id="instructions" name="instructions" placeholder="Instructions"></textarea>

  // <button type="submit">Create</button>
  // </form>

  // TODO: #4.2 Detect if creating or updating

  // create form element
  const recipeForm = document.createElement("form");

  // TODO: #4.3 Add starting input values
  // title label and input
  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = "Enter title...";

  // image label and input
  const imageLabel = document.createElement("label");
  imageLabel.htmlFor = "image_url";
  imageLabel.textContent = "Image URL";

  const imageInput = document.createElement("input");
  imageInput.type = "text";
  imageInput.id = "image_url";
  imageInput.name = "image_url";
  imageInput.placeholder = "Enter image URL...";

  // instructions label and input
  const instructionsLabel = document.createElement("label");
  instructionsLabel.htmlFor = "instructions";
  instructionsLabel.textContent = "Instructions";

  const instructionsInput = document.createElement("textarea");
  instructionsInput.id = "instructions";
  instructionsInput.name = "instructions";
  instructionsInput.placeholder = "Enter recipe instructions...";

  // submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  recipeForm.append(
    titleLabel,
    titleInput,
    imageLabel,
    imageInput,
    instructionsLabel,
    instructionsInput,
    submitButton
  );

  // titleInput.addEventListener('change', (event) => {
  //   console.log(event.target.value);
  // })

  recipeForm.addEventListener("submit", async (event) => {
    // prevent the page from being automatically refreshed after submit
    event.preventDefault();

    const form = event.target;

    const recipeData = {
      // this is titleInput
      // because titleInput has name="title"
      title: form.title.value,
      // this is imageInput because name="image_url"
      image_url: form.image_url.value,
      instructions: form.instructions.value,
    };

    // TODO: #4.4 Call UPDATE if updating
    await createNewRecipe(recipeData);

    form.reset();
  });

  newRecipeFormEl.appendChild(recipeForm);
};

// create main function to render main view
// we have to put this code in a function
// because we are relying on async code
// and we cannot use await keyword outside of a function
const init = async () => {
  renderCreateNewRecipeForm();
  const recipes = await fetchAllRecipes();
  renderAllRecipes(recipes);
};

// call main function
init();
