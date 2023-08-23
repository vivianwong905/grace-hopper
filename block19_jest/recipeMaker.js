const oven = {
  temperature: 0,
  resetTemperature: () => {
    oven.temperature = 0;
  },
  // TODO: Create a method, which preheats the oven
  // it should:
  // print "Preheating oven... current temp: <temp>" as the temperature goes up
  // return "Preheated to <temp>" when done
  preheat: (temperature) => {
    // while oven.temperature is not yet temperature,
    // keep incrementing oven.temperature and printing
  },

  // TODO: Create a method which bakes/cooks the dish
  // it should:
  // print "Baking <recipe>... X minutes left"
  // return "<recipe> is done baking!" when finished

  bake: (recipeName, time) => {
    // while timeRemaining > 0
    // keep decrementing and printing
  },
};

const cakeRecipe = {
  name: "Chocolate Cake",
  ingredients: [
    { quantity: 1.5, unit: "cup", name: "flour" },
    { quantity: 1, unit: "cup", name: "sugar" },
    { quantity: 0.5, unit: "teaspoon", name: "salt" },
    { quantity: 1, unit: "teaspoon", name: "baking soda" },
    { quantity: 0.3, unit: "cup", name: "cocoa powder" },
    { quantity: 0.3, unit: "cup", name: "oil" },
    { quantity: 1, unit: "tablespoon", name: "vinegar" },
    { quantity: 1, unit: "teaspoon", name: "vanilla extract" },
    { quantity: 1, unit: "cup", name: "water" },
  ],
  steps: [
    "Mix all dry ingredients",
    "Add the liquids and mix until combined",
    "Pour into cake pan",
  ],
  temperature: 350,
  bakeMinutes: 35,
  sourceURL: "https://www.budgetbytes.com/chocolate-depression-cake/",
};

const cookieRecipe = {
  name: "Chocolate Chip Cookies",
  ingredients: [
    { quantity: 1.5, unit: "cup", name: "flour" },
    { quantity: 1, unit: "cup", name: "sugar" },
    { quantity: 0.5, unit: "teaspoon", name: "salt" },
    { quantity: 1, unit: "teaspoon", name: "baking soda" },
    { quantity: 0.3, unit: "cup", name: "cocoa powder" },
    { quantity: 0.3, unit: "cup", name: "oil" },
    { quantity: 1, unit: "tablespoon", name: "vinegar" },
    { quantity: 1, unit: "teaspoon", name: "vanilla extract" },
    { quantity: 1, unit: "cup", name: "water" },
  ],
  steps: [
    "Mix all dry ingredients",
    "Add the liquids and mix until combined",
    "Pour into cake pan",
  ],
  temperature: 350,
  bakeMinutes: 35,
  sourceURL:
    "https://www.kingarthurbaking.com/recipes/soft-chocolate-chip-cookies-recipe",
};

// Create a function: prettyPrintRecipe, which prepares a nice human-readable version of the recipe
// eg:
/*
    TITLE

    Ingredients:
    * 1 cup flour
    * 1 tsp sugar
    
    Steps:
    1. Preheat oven to <temperature>
    2. Step 1...
    3. Step 2..
    4. Bake for <bakeMinutes> minutes
    
    Enjoy!
 */
function prettyPrintRecipe(recipe) {
  let result = `
${recipe.name}
---------------------------------`;

  result += "\n\nIngredients:\n";

  // prepping the ingredients
  for (let ing of recipe.ingredients) {
    result += `
* ${ing.quantity} ${ing.unit + (ing.quantity > 1 ? "s" : "")} ${ing.name}`;
  }

  // Tradeoffs / Approaches
  // map to produce a new array of strings for each ingredient => ["* 1 cup flour", "* 1 tsp sugar"] => join("\n") to turn back into a string
  // for..of loop through the ingredients array and access the properties on the object to create a string
  // slightly preferable to a for loop because we don't have to manually access array items by index (could add bugs)
  // .forEach put the properties in the string "* 1 cup flour" concat to result
  // only difference here is that it requires a function, it cannot be exited early using break
  // for loop
  // unfortunately this won't work, bc .toString doesn't do what we might expect ---loop through object and use toString to convert object into a string -> {}.toString() => "[object Object]"---

  // Steps:
  result += `\n\nSteps:\n`;

  // 1. Preheat oven to <temperature>
  result += `1. Preheat oven to ${recipe.temperature}`;

  // 2. <Step 1...>
  // 3. <Step 2...>
  for (let i = 0; i < recipe.steps.length; i++) {
    result += `\n${i + 2}. ${recipe.steps[i]}`;
  }

  // 4. Bake for <bakeMinutes> minutes
  result += `\n${recipe.steps.length + 2}. Bake for ${
    recipe.bakeMinutes
  } minutes`;

  // Enjoy!
  result += "\n\nEnjoy!\n\n\n";
  return result;
}

console.log(prettyPrintRecipe(cakeRecipe));
console.log(prettyPrintRecipe(cookieRecipe));

// TODO: Create a function: makeRecipe that:
// - preheats a given recipe and logs the output
// - prints each recipe step to the console to show they were completed
// - bakes the recipe and logs the output
// - returns "<recipeName> is done!"
function makeRecipe(recipe) {
  console.log("Let's make " + recipe.name);

  oven.preheat(recipe.temperature);

  recipe.steps.forEach((step) => console.log(step));

  oven.bake(recipe.name, recipe.bakeMinutes);

  return `${recipe.name} is done!`;
}

console.log(makeRecipe(cakeRecipe));
console.log(makeRecipe(cookieRecipe));
