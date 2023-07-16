// Set up variables to store references to the relevant HTML elements
const searchInput = document.getElementById('search-input');
const recipeListings = document.getElementById('recipe-listings');
const favoritesSection = document.getElementById('favorites');
const addRecipeForm = document.getElementById('add-recipe-form');

// Store recipe data (can be retrieved from a backend API or local storage)
let recipes = [
  { id: 1, name: 'Pasta Carbonara', ingredients: 'Spaghetti, Eggs, Bacon, Parmesan Cheese', instructions: '1. Cook spaghetti. 2. Fry bacon. 3. Beat eggs. 4. Mix everything together.' },
  { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: '1. Cook chicken. 2. Mix curry powder with coconut milk. 3. Simmer everything together.' },
  // Add more recipe objects as needed
];

// Display all recipes on page load
renderRecipes(recipes);

// Add event listeners
searchInput.addEventListener('input', handleSearch);
addRecipeForm.addEventListener('submit', handleAddRecipe);

// Function to render all recipes
function renderRecipes(recipes) {
  // Clear existing listings
  recipeListings.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.name;

    const recipeIngredients = document.createElement('p');
    recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;

    const recipeInstructions = document.createElement('p');
    recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;

    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(recipeIngredients);
    recipeCard.appendChild(recipeInstructions);

    recipeListings.appendChild(recipeCard);
  });
}

// Function to handle the search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe => {
    const recipeName = recipe.name.toLowerCase();
    return recipeName.includes(searchTerm);
  });

  // Display the filtered recipes
  renderRecipes(filteredRecipes);
}

// Function to handle adding a new recipe
function handleAddRecipe(event) {
  event.preventDefault();

  const recipeName = document.getElementById('recipe-name').value;
  const recipeIngredients = document.getElementById('recipe-ingredients').value;
  const recipeInstructions = document.getElementById('recipe-instructions').value;

  // Create a new recipe object
  const newRecipe = {
    id: Date.now(),
    name: recipeName,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  };

  // Add the new recipe to the recipes array
  recipes.push(newRecipe);

  // Clear the form inputs
  addRecipeForm.reset();

  // Re-render the recipes with the new recipe included
  renderRecipes(recipes);
}
