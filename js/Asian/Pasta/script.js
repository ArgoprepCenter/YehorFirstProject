let details = ""; 
let recipeDetails = document.getElementById("recipe-details");
// let buttonGarlic = document.getElementById("garlic-noodle");
// let buttonSoy = document.getElementById("soy-pasta");
// let buttonChar = document.getElementById("char-pasta");
// let buttonHokkien = document.getElementById("hokkien-mee");
// let buttonMee = document.getElementById("mee-goreng");
// let buttonPad = document.getElementById("pad-woon-sen");
// let buttonChicken = document.getElementById("chicken-chow-mein");
// let buttonDan = document.getElementById("dan-dan-noodles");
let button = document.getElementsByClassName("btn");
console.log(button);

for (let item of button) {
    // console.log(item.id);
    item.onclick = function() {
        recipe_id = item.id;
        recipe_name = recipe_id.replace("-", "_");
        // console.log(recipes[recipe_name]);
        
        modal.style.display = "block";
        // details = recipes[recipe_name];        
        details = getRecipe(recipe_id);
        // for (const [key, value] of Object.entries(details[0])) {
        //   console.log(`${key}: ${value}`);
        // }
        console.log(details[0]);
        recipeDetails.innerHTML = details;
    }
}

// buttonGarlic.onclick = function(){
//     modal.style.display = "block";
//     details = recipes.garlic_noodle;
//     recipeDetails.innerHTML = details;
// }
// buttonSoy.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.soy_pasta;
//   recipeDetails.innerHTML = details;
// }
// buttonHokkien.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.char_pasta;
//   recipeDetails.innerHTML = details;
// }
// buttonMee.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.hokkien_mee;
//   recipeDetails.innerHTML = details;
// }
// buttonPad.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.mee_goreng;
//   recipeDetails.innerHTML = details;
// }
// buttonChicken.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.pad_woon_sen;
//   recipeDetails.innerHTML = details;
// }
// buttonDan.onclick = function(){
//   modal.style.display = "block";
//   details = recipes.asian_pasta;
//   recipeDetails.innerHTML = details;
// }
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

async function getRecipe(recipe_id) {
  const response = await fetch("http://localhost/YehorFirstProject/php/getrecipe.php");
  const result = await response.json();
  console.log("response: " + result);
  return result;
}