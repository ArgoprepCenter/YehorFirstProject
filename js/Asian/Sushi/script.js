let details = ""; 
let recipeDetails = document.getElementById("recipe-details");
let button = document.getElementsByClassName("btn");
console.log(button);

for (let item of button) {
    item.onclick = function() {
        recipe_id = item.id;
        recipe_name = recipe_id.replace("-", "_");
        modal.style.display = "block";
        details = getRecipe(recipe_name);
        recipeDetails.innerHTML = "";
    }
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

async function getRecipe(recipe_name) {
  const response = await fetch("http://localhost/YehorFirstProject/php/getrecipe.php?recipe_name=" + recipe_name);
  const result = await response.json();
  console.log("response: " + result[0]);
  recipeDetails.innerHTML = result[0].ingredients;
}