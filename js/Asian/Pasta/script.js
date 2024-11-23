let details = ""; 
let recipeDetails = document.getElementById("recipe-details");
let buttonGarlic = document.getElementById("garlic-noodle");
let buttonSoy = document.getElementById("soy-sauce-pan-fried-noodles");
let buttonChar = document.getElementById("Char-Kway-Teow");
let buttonHokkien = document.getElementById("Hokkien-Mee");
let buttonMee = document.getElementById("Mee-Goreng");
let buttonPad = document.getElementById("Pad-Woon-Sen");
let buttonChicken = document.getElementById("Chicken-Chow-Mein");
let buttonDan = document.getElementById("Dan-Dan-Noodles");

buttonGarlic.onclick = function(){
    modal.style.display = "block";
    details = recipes.asian_pasta;
    recipeDetails.innerHTML = details;
}
buttonSoy.onclick = function(){
  modal.style.display = "block";
  details = recipes.soy_pasta;
  recipeDetails.innerHTML = details;
}
buttonChar.onclick = function(){
  modal.style.display = "block";
  details = recipes.q_pasta;
  recipeDetails.innerHTML = details;
}
buttonHokkien.onclick = function(){
  modal.style.display = "block";
  details = recipes.Char_pasta;
  recipeDetails.innerHTML = details;
}
buttonMee.onclick = function(){
  modal.style.display = "block";
  details = recipes.asian_pasta;
  recipeDetails.innerHTML = details;
}
buttonPad.onclick = function(){
  modal.style.display = "block";
  details = recipes.asian_pasta;
  recipeDetails.innerHTML = details;
}
buttonChicken.onclick = function(){
  modal.style.display = "block";
  details = recipes.asian_pasta;
  recipeDetails.innerHTML = details;
}
buttonDan.onclick = function(){
  modal.style.display = "block";
  details = recipes.asian_pasta;
  recipeDetails.innerHTML = details;
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
